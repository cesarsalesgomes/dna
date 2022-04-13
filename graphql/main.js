import axios from 'axios';
import {
  setDotenvConfiguration, copyGeneratedFilesToUsageFolders, getFeaturesDirectoriesExcludingNodeModules, shellCommand
} from './utils.js';

const DIRECTUS_LOCAL_LOGIN_ROUTE = 'http://127.0.0.1/auth/login';

async function getDirectusAccessToken() {
  const email = process.env.DIRECTUS_ADMIN_EMAIL;
  const password = process.env.DIRECTUS_ADMIN_PASSWORD;

  return axios.post(DIRECTUS_LOCAL_LOGIN_ROUTE, {
    email,
    password
  }).then(({ data }) => data.data.access_token);
}

async function setAccessTokenOnEnviromentAndRunGraphqlCodegenScript(accessToken, pathToCodegen) {
  const command = `cross-env DOCKER_DNA_DIRECTUS_ACCESS_TOKEN=${accessToken} graphql-codegen --config ${pathToCodegen}`;

  await shellCommand(command);
}

async function runGraphqlCodegenScriptAndCopyGeneratedFilesToUsageFolders(accessToken, featureName) {
  const PATH_TO_AUTH_CODEGEN = `./${featureName}/codegen.yml`;

  await setAccessTokenOnEnviromentAndRunGraphqlCodegenScript(accessToken, PATH_TO_AUTH_CODEGEN);

  copyGeneratedFilesToUsageFolders(featureName);
}

async function main() {
  setDotenvConfiguration()

  const accessToken = await getDirectusAccessToken();

  for (const featureName of getFeaturesDirectoriesExcludingNodeModules()) {
    try {
      await runGraphqlCodegenScriptAndCopyGeneratedFilesToUsageFolders(accessToken, featureName);

      console.log(`[${featureName.toUpperCase()}] Graphql Codegen generated with success\n`);
    } catch (error) {
      console.error(`[${featureName.toUpperCase()}] the following error occurred: ${error}\n`);
    }
  }

}

main();