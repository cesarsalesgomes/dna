import axios from 'axios';
import { runAuthGraphqlCodegenScript } from './auth/codegen.js';
import { runCatGraphqlCodegenScript } from './cat/codegen.js'
import { runRestaurantGraphqlCodegenScript } from './restaurant/codegen.js'
import { setDotenvConfiguration } from './utils.js';

const DIRECTUS_LOCAL_LOGIN_ROUTE = 'http://127.0.0.1/auth/login';

async function getDirectusAccessToken() {
  const email = process.env.DIRECTUS_ADMIN_EMAIL;
  const password = process.env.DIRECTUS_ADMIN_PASSWORD;

  return axios.post(DIRECTUS_LOCAL_LOGIN_ROUTE, {
    email,
    password
  }).then(({ data }) => data.data.access_token)
}

async function main() {
  setDotenvConfiguration()

  const accessToken = await getDirectusAccessToken();

  await runCatGraphqlCodegenScript(accessToken);
  await runAuthGraphqlCodegenScript(accessToken);
  await runRestaurantGraphqlCodegenScript(accessToken);

  console.log('Graphql Codegen generated with success')
}

main();