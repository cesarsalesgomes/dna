import { copyFileSync } from 'fs';
import { setAccessTokenOnEnviromentAndRunGraphqlCodegenScript } from '../utils.js';

const PATH_TO_RESTAURANT_CODEGEN = './restaurant/codegen.yml';

function copyRestaurantSdkToNestRestaurantFolder() {
  copyFileSync(`./restaurant/restaurant.sdk.ts`, `../nestjs/src/features/restaurant/restaurant.sdk.ts`);
}

function copyRestaurantMockToNestRestaurantFolder() {
  copyFileSync(`./restaurant/restaurant.mock.ts`, `../nestjs/src/features/restaurant/restaurant.mock.ts`);
}

function copyRestaurantHooksToReactFolder() {
  copyFileSync(`./restaurant/restaurant.hooks.ts`, `../react/src/hooks/restaurant.hooks.ts`);
}

export async function runRestaurantGraphqlCodegenScript(accessToken) {
  await setAccessTokenOnEnviromentAndRunGraphqlCodegenScript(accessToken, PATH_TO_RESTAURANT_CODEGEN);

  copyRestaurantSdkToNestRestaurantFolder();

  copyRestaurantMockToNestRestaurantFolder();

  copyRestaurantHooksToReactFolder();
}
