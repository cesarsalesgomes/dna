/* eslint-disable max-classes-per-file */
import {
  authentication, rest, type DirectusClient, createDirectus, staticToken, type RestClient, type RestCommand, type AuthenticationData,
} from '@directus/sdk';

import { DNA_BACKEND_URL } from '$constants/system.constants';
import { getAccessToken } from '$features/auth/utils';
import { directusLoginErrorHandler, directusRequestErrorHandler } from '$features/error-handler/utils/error-handler.utils';
import type DirectusError from '$interfaces/directus-error.interface';
import { decrementFetchesBeingPerformed, incrementFetchesBeingPerformed } from '$stores/fetches-being-performed.store';
import type DirectusClients from '$types/directus-clients.type';
import type DirectusSchema from '$types/directus-schema.type';

class DirectusSdk {
  static instance: DirectusClient<DirectusSchema> & RestClient<DirectusSchema>;

  static getInstance() {
    if (!DirectusSdk.instance) {
      DirectusSdk.instance = createDirectus<DirectusSchema>(DNA_BACKEND_URL).with(rest());
    }

    return DirectusSdk.instance;
  }
}

/**
 * Directus Sveltekit Client methods
 */
export class DirectusClientSdk extends DirectusSdk {
  static async login(email: string, password: string, onSucess?: (data: AuthenticationData) => void) {
    try {
      incrementFetchesBeingPerformed();

      const directusClient = this.getInstance().with(authentication('cookie'));

      const res = await directusClient.login(email, password, {});

      if (onSucess) onSucess(res);

      return res;
    } catch (error) {
      directusLoginErrorHandler(error as DirectusError);

      return null;
    } finally {
      decrementFetchesBeingPerformed();
    }
  }

  static getAuthenticatedClient(): DirectusClients {
    return this.getInstance().with(staticToken(getAccessToken()));
  }

  static async request<T extends object>(command: RestCommand<T, DirectusSchema>, onSucess?: () => void) {
    try {
      incrementFetchesBeingPerformed();

      const res = await this.getAuthenticatedClient().request<T>(command);

      if (onSucess) onSucess();

      return res;
    } catch (error) {
      directusRequestErrorHandler(error as DirectusError);

      return undefined;
    } finally {
      decrementFetchesBeingPerformed();
    }
  }
}

/**
 * Directus Sveltekit Server methods
 */
export class DirectusServerSdk extends DirectusSdk {
  static getAuthenticatedClient(accessToken: string): DirectusClients {
    return this.getInstance().with(staticToken(accessToken));
  }

  static async request<T extends object>(command: RestCommand<T, DirectusSchema>, accessToken: string) {
    return this.getAuthenticatedClient(accessToken).request<T>(command);
  }
}
