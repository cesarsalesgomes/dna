import {
  authentication, rest, useDirectus, type DirectusClient, type RestClient, type AuthenticationClient,
} from '@directus/sdk';

import { DNA_BACKEND_URL } from '$constants/system.constants';
import { directusErrorHandler } from '$features/auth/error-handler/utils/error-handler.utils';
import type DirectusError from '$interfaces/directus-error.interface';
import type DirectusSchema from '$types/directus-schema.type';

export default class DirectusRestClient {
  static instance: DirectusClient<DirectusSchema> & RestClient<DirectusSchema> & AuthenticationClient<DirectusSchema>;

  static getInstance() {
    if (!DirectusRestClient.instance) {
      DirectusRestClient.instance = useDirectus<DirectusSchema>(DNA_BACKEND_URL).use(rest()).use(authentication('cookie'));
    }

    return DirectusRestClient.instance;
  }

  static async login(email: string, password: string) {
    try {
      const directusRestClient = this.getInstance();

      return await directusRestClient.login(email, password);
    } catch (error) {
      directusErrorHandler(error as DirectusError);

      return null;
    }
  }
}
