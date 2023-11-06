/* eslint-disable max-classes-per-file */
import {
  authentication, rest, type DirectusClient, createDirectus, staticToken, type RestClient, type RestCommand, type AuthenticationData, refresh,
} from '@directus/sdk';
import { redirect, error as svelteKitError } from '@sveltejs/kit';

import { UNEXPECTED_SERVER_ERROR } from '$constants/error.constants';
import { LOGIN_ROUTE } from '$constants/route.constants';
import { DNA_BACKEND_URL } from '$constants/system.constants';
import { getAccessToken } from '$features/auth/utils';
import { checkIfItsAnInvalidTokenError, getGraphQlErrorCode } from '$features/error-handler/utils/error-code.utils';
import {
  checkIsDirectusError, directusLoginErrorHandler, directusRequestErrorHandler, getDirectusError,
} from '$features/error-handler/utils/error-handler.utils';
import type DirectusError from '$interfaces/directus-error.interface';
import { decrementFetchesBeingPerformed, incrementFetchesBeingPerformed } from '$stores/fetches-being-performed.store';
import type DirectusClients from '$types/directus-clients.type';
import type { DirectusSchema } from '$types/directus-schema.type';

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
    try {
      return await this.getAuthenticatedClient(accessToken).request<T>(command);
    } catch (err) {
      if (checkIsDirectusError(err)) {
        const error = getDirectusError(err as DirectusError);
        const code = getGraphQlErrorCode(error);

        if (checkIfItsAnInvalidTokenError(code)) {
          throw redirect(303, LOGIN_ROUTE);
        }

        throw svelteKitError(500, error);
      }

      throw svelteKitError(500, UNEXPECTED_SERVER_ERROR);
    }
  }

  static googleLogin(refreshToken?: string) {
    const directusClient = this.getInstance().with(authentication());

    if (!refreshToken) throw redirect(303, LOGIN_ROUTE);

    return directusClient.request(refresh(refreshToken));
  }
}
