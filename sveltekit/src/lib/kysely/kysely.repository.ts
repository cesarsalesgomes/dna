/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';

import type { KyselySchema } from '$types/directus-schema.type';

import {
  KYSELY_DATABASE, KYSELY_HOST, KYSELY_USER, KYSELY_PASSWORD, KYSELY_PORT,
} from '$env/static/private';

export default class KyselyRepository {
  static instance: Kysely<KyselySchema>;

  static getInstance() {
    if (!KyselyRepository.instance) {
      const dialect = new PostgresDialect({
        pool: new Pool({
          database: KYSELY_DATABASE,
          host: KYSELY_HOST,
          user: KYSELY_USER,
          password: KYSELY_PASSWORD,
          port: Number(KYSELY_PORT),
          max: 10,
        }),
      });

      this.instance = new Kysely<KyselySchema>({
        dialect,
      });
    }

    return KyselyRepository.instance;
  }
}
