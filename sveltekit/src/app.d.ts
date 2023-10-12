/* eslint-disable @typescript-eslint/no-empty-interface */
// See https://kit.svelte.dev/docs/types#app

import type GraphQLError from '$interfaces/graphql-error.interface';

// for information about these interfaces
declare global {
  namespace App {
    interface Error extends GraphQLError { }
    interface Locals {
      userId: string;
      accessToken: string;
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export { };
