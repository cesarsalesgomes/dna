import {
  authentication, rest, type DirectusClient, createDirectus, staticToken, type RestClient,
} from '@directus/sdk';

import { DNA_BACKEND_URL } from '$constants/system.constants';
import { directusErrorHandler } from '$features/auth/error-handler/utils/error-handler.utils';
import type DirectusError from '$interfaces/directus-error.interface';
import type DirectusAuthClient from '$types/directus-auth-client.type';
import type DirectusSchema from '$types/directus-schema.type';

export default class DirectusRestClient {
  static instance: DirectusClient<DirectusSchema> & RestClient<DirectusSchema>;

  static getInstance() {
    if (!DirectusRestClient.instance) {
      DirectusRestClient.instance = createDirectus<DirectusSchema>(DNA_BACKEND_URL).with(rest());
    }

    return DirectusRestClient.instance;
  }

  static getAuthenticatedClient(accessToken: string): DirectusAuthClient {
    return this.getInstance().with(staticToken(accessToken));
  }

  static async login(email: string, password: string) {
    try {
      const directusRestClient = this.getInstance().with(authentication('cookie'));

      return await directusRestClient.login(email, password, {});
    } catch (error) {
      directusErrorHandler(error as DirectusError);

      return null;
    }
  }

  static async request<T>(command: Promise<T>) {
    try {
      return await command;
    } catch (error) {
      directusErrorHandler(error as DirectusError);

      return undefined;
    }
  }
}
