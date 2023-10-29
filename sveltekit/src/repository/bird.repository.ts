import type DirectusPayload from '$interfaces/directus-payload.interface';
import { KyselyRepository } from '$lib/kysely';

export default class BirdRepository {
  static async getBirds({ role, admin_access: admin }: DirectusPayload) {
    await KyselyRepository.checkIfRoleHasPermissionToReadCollections(role, ['bird'], admin);

    return KyselyRepository.getInstance().selectFrom('bird').select('name').execute();
  }
}
