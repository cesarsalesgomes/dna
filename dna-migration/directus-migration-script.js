import { exec } from 'child_process';

/**
 * Helper functions
 */

function shellCommand(cmd) {
  return new Promise((resolve) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) console.warn(error);

      resolve(stdout ? stdout : stderr);
    });
  });
}

function getCurrentDirectory() {
  return process.cwd();
}

/**
 * Docker script commands
 */

async function removeSchemaFileFromDockerContainer() {
  const dockerCommand = `docker exec directus rm schema.yaml`;

  await shellCommand(dockerCommand);
}

async function exportDataModelToSchemaFileOnDockerDirectusInstance() {
  const dockerCommand = `docker exec directus npx directus schema snapshot ./schema.yaml --format yaml`;

  await shellCommand(dockerCommand);
}

async function copyDirectusSchemaGeneratedToMigrationFolder() {
  const dockerCommand = `docker cp directus:directus/schema.yaml ${getCurrentDirectory()}`;

  await shellCommand(dockerCommand);
}

async function main() {
  await removeSchemaFileFromDockerContainer();
  await exportDataModelToSchemaFileOnDockerDirectusInstance();
  await copyDirectusSchemaGeneratedToMigrationFolder();
}

main();