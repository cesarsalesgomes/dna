import type { DirectusClient, RestClient, StaticTokenClient } from '@directus/sdk';

import type { DirectusSchema } from './directus-schema.type';

type DirectusClients = DirectusClient<DirectusSchema> & RestClient<DirectusSchema> & StaticTokenClient<DirectusSchema>

export default DirectusClients;
