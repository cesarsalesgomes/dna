import { exec } from 'child_process';
import { copyFileSync } from 'fs';
import axios from 'axios';
import dotenv from 'dotenv';

const DIRECTUS_SDK_FILENAME = 'directus.sdk.ts';
const DIRECTUS_MOCK_FILENAME = 'directus.mock.ts';

/**
 * Helper functions
 */

function getCurrentDirectory() {
  return process.cwd();
}

function shellCommand(cmd) {
  return new Promise((resolve) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) console.warn(error);

      resolve(stdout ? stdout : stderr);
    });
  });
}

function setDotenvConfiguration() {
  dotenv.config({ path: `${getCurrentDirectory()}/../.env` })
}

/**
 * Scripts
 */

async function getDirectusAccessToken() {
  const email = process.env.DIRECTUS_ADMIN_EMAIL;
  const password = process.env.DIRECTUS_ADMIN_PASSWORD;

  return axios.post('http://127.0.0.1/auth/login', {
    email,
    password
  }).then(({ data }) => data.data.access_token)
}

async function setAccessTokenOnEnviromentAndRunGraphqlCodegenScript(accessToken) {
  const command = `cross-env DOCKER_DNA_DIRECTUS_ACCESS_TOKEN=${accessToken} npm run generate`;

  await shellCommand(command);
}

function copyGeneratedSdkToNestSystemDirectusFolder() {
  copyFileSync(`${DIRECTUS_SDK_FILENAME}`, `../nestjs/src/system/directus/${DIRECTUS_SDK_FILENAME}`);
}

function copyGeneratedMockToNestSystemDirectusFolder() {
  copyFileSync(`${DIRECTUS_MOCK_FILENAME}`, `../nestjs/src/system/directus/${DIRECTUS_MOCK_FILENAME}`);
}


async function main() {
  setDotenvConfiguration()

  await setAccessTokenOnEnviromentAndRunGraphqlCodegenScript(await getDirectusAccessToken());

  copyGeneratedSdkToNestSystemDirectusFolder();
  copyGeneratedMockToNestSystemDirectusFolder();
}

main();