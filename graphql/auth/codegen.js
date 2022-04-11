import { copyFileSync } from 'fs';
import { setAccessTokenOnEnviromentAndRunGraphqlCodegenScript } from '../utils.js';

const PATH_TO_AUTH_CODEGEN = './auth/codegen.yml';

function copyAuthSdkToNestAuthFolder() {
  copyFileSync(`./auth/auth.sdk.ts`, `../nestjs/src/features/auth/auth.sdk.ts`);
}

function copyAuthMockToNestAuthFolder() {
  copyFileSync(`./auth/auth.mock.ts`, `../nestjs/src/features/auth/auth.mock.ts`);
}

function copyAuthHooksToReactFolder() {
  copyFileSync(`./auth/auth.hooks.ts`, `../react/src/hooks/auth.hooks.ts`);
}

export async function runAuthGraphqlCodegenScript(accessToken) {
  await setAccessTokenOnEnviromentAndRunGraphqlCodegenScript(accessToken, PATH_TO_AUTH_CODEGEN);

  copyAuthSdkToNestAuthFolder();

  copyAuthMockToNestAuthFolder();

  copyAuthHooksToReactFolder();
}
