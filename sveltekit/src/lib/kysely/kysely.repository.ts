import { error as svelteKitError } from '@sveltejs/kit';
import { Kysely, PostgresDialect } from 'kysely';
import pg from 'pg';

import { FORBIDDEN_ERROR } from '$constants/error.constants';
import type { KyselySchema } from '$types/directus-schema.type';

import { dev } from '$app/environment';
import {
  KYSELY_DATABASE, KYSELY_HOST, KYSELY_USER, KYSELY_PASSWORD, KYSELY_PORT,
} from '$env/static/private';

export default class KyselyRepository {
  static instance: Kysely<KyselySchema>;

  static getInstance() {
    if (!KyselyRepository.instance) {
      const dialect = new PostgresDialect({
        pool: new pg.Pool({
          database: KYSELY_DATABASE,
          host: KYSELY_HOST,
          user: KYSELY_USER,
          password: KYSELY_PASSWORD,
          port: Number(KYSELY_PORT),
          max: 10,
          ssl: !dev,
        }),
      });

      this.instance = new Kysely<KyselySchema>({
        dialect,
      });
    }

    return KyselyRepository.instance;
  }

  static async checkIfRoleHasPermissionToReadCollections(roleId: string, collections: Array<keyof KyselySchema>, isAdmin: boolean): Promise<void> {
    if (isAdmin) return;

    const permissions = await this.getCollectionsWithReadPermissionOfRole(roleId, collections);

    // eslint-disable-next-line no-restricted-syntax
    for (const collection of collections) {
      const hasPermission = !!permissions.find((permission) => permission.collection === collection);

      if (!hasPermission) throw svelteKitError(500, FORBIDDEN_ERROR);
    }
  }

  private static getCollectionsWithReadPermissionOfRole(roleId: string, collections: Array<keyof KyselySchema>) {
    return this.getInstance().selectFrom('directus_permissions').select('collection')
      .where('role', '=', roleId)
      .where('collection', 'in', collections)
      .where('action', '=', 'read')
      .execute();
  }
}
