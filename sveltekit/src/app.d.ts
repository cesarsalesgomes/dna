// See https://kit.svelte.dev/docs/types#app

import type DirectusAuthClient from '$types/directus-auth-client.type';

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      userId: string;
      directusAuthClient: DirectusAuthClient;
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export { };
