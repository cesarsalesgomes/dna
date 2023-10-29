/* eslint-disable @typescript-eslint/no-empty-interface */
// See https://kit.svelte.dev/docs/types#app

import type DirectusPayload from '$interfaces/directus-payload.interface';
import type GraphQLError from '$interfaces/graphql-error.interface';

// for information about these interfaces
declare global {
  namespace App {
    interface Error extends GraphQLError { }
    interface Locals {
      directusPayload: DirectusPayload;
      accessToken: string;
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export { };
