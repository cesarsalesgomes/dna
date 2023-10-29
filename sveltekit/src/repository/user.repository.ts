import type DirectusPayload from '$interfaces/directus-payload.interface';
import { KyselyRepository } from '$lib/kysely';
import type { DirectusUsers } from '$types/directus-schema.type';

export default class UserRepository {
  static async getMe({ id: userId }: DirectusPayload): Promise<Partial<DirectusUsers>> {
    return KyselyRepository.getInstance()
      .selectFrom('directus_users')
      .select(['first_name', 'last_name', 'avatar'])
      .where('id', '=', userId)
      .executeTakeFirstOrThrow();
  }
}
