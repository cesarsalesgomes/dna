import { copyFileSync } from 'fs';
import { setAccessTokenOnEnviromentAndRunGraphqlCodegenScript } from '../utils.js';

const PATH_TO_CAT_CODEGEN = './cat/codegen.yml';

function copyCatSdkToNestCatFolder() {
  copyFileSync(`./cat/cat.sdk.ts`, `../nestjs/src/features/cat/cat.sdk.ts`);
}

function copyCatMockToNestCatFolder() {
  copyFileSync(`./cat/cat.mock.ts`, `../nestjs/src/features/cat/cat.mock.ts`);
}

function copyCatHooksToReactFolder() {
  copyFileSync(`./cat/cat.hooks.ts`, `../react/src/hooks/cat.hooks.ts`);
}

export async function runCatGraphqlCodegenScript(accessToken) {
  await setAccessTokenOnEnviromentAndRunGraphqlCodegenScript(accessToken, PATH_TO_CAT_CODEGEN);

  copyCatSdkToNestCatFolder();

  copyCatMockToNestCatFolder();

  copyCatHooksToReactFolder();
}
