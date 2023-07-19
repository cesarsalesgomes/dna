import {
  authentication, rest, useDirectus, type DirectusClient, type RestClient, type AuthenticationClient,
} from '@directus/sdk';

import { DNA_BACKEND_URL } from '$constants/system.constants';
import type DirectusSchema from '$types/directus-schema.type';

export default class DirectusRestClientSingleton {
  static instance: DirectusClient<DirectusSchema> & RestClient<DirectusSchema> & AuthenticationClient<DirectusSchema>;

  public static getInstance() {
    if (!DirectusRestClientSingleton.instance) {
      DirectusRestClientSingleton.instance = useDirectus<DirectusSchema>(DNA_BACKEND_URL).use(rest()).use(authentication('cookie'));
    }

    return DirectusRestClientSingleton.instance;
  }
}
