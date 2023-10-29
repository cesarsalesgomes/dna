/* eslint-disable import/no-extraneous-dependencies */
import type { ExpressionBuilder } from 'kysely';
import { jsonObjectFrom } from 'kysely/helpers/postgres';

import type DirectusPayload from '$interfaces/directus-payload.interface';
import { KyselyRepository } from '$lib/kysely';
import type { KyselySchema } from '$types/directus-schema.type';

export default class CatsRepository {
  static async getCatsWithFamily({ role, admin_access: admin }: DirectusPayload) {
    await KyselyRepository.checkIfRoleHasPermissionToReadCollections(role, ['cat', 'family'], admin);

    return KyselyRepository.getInstance().selectFrom('cat').select('name').select(
      (eb) => [
        this.withFamily(eb),
      ],
    )
      .execute();
  }

  private static withFamily(eb: ExpressionBuilder<KyselySchema, 'cat'>) {
    return jsonObjectFrom(
      eb.selectFrom('family')
        .select('name')
        .whereRef('family.id', '=', 'cat.family'),
    ).as('family');
  }
}
