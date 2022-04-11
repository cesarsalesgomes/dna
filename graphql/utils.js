import dotenv from 'dotenv';
import { exec } from 'child_process';

function getCurrentDirectory() {
  return process.cwd();
}

export function shellCommand(cmd) {
  return new Promise((resolve) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) console.warn(error);

      resolve(stdout ? stdout : stderr);
    });
  });
}

export async function setAccessTokenOnEnviromentAndRunGraphqlCodegenScript(accessToken, pathToCodegen) {
  const command = `cross-env DOCKER_DNA_DIRECTUS_ACCESS_TOKEN=${accessToken} graphql-codegen --config ${pathToCodegen}`;

  await shellCommand(command);
}

export function setDotenvConfiguration() {
  dotenv.config({ path: `${getCurrentDirectory()}/../.env` })
}