import { exec } from 'child_process';
import { copyFileSync } from 'fs';

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

function getCurrentUTCDate() {
  const currentDate = new Date().toISOString();
  const currentDateWithoutMilisseconds = currentDate.substr(0, currentDate.length - 5);
  const currentDateWithoutColons = currentDateWithoutMilisseconds.replace(':', '_').replace(':', '_');

  return currentDateWithoutColons;
}

/**
 * Docker script commands
 */

async function removeSchemaFileFromDockerContainer() {
  try {
    const dockerCommand = `docker exec directus rm schema.yaml`;

    await shellCommand(dockerCommand);
  } catch (error) {
    // Ignore error when file to be removed is not found
  }
}

async function exportDataModelToSchemaFileOnDockerDirectusInstance() {
  const dockerCommand = `docker exec directus npx directus schema snapshot ./schema.yaml --format yaml`;

  await shellCommand(dockerCommand);
}

async function copyDirectusSchemaGeneratedToMigrationFolder() {
  const dockerCommand = `docker cp directus:directus/schema.yaml ${getCurrentDirectory()}`;

  await shellCommand(dockerCommand);
}

function copyGeneratedSchemaToHistoryFolder() {
  copyFileSync('schema.yaml', `./schema-history/${getCurrentUTCDate()}.yaml`)
}

function copyGeneratedSchemaToDirectusMigrationsFolder() {
  copyFileSync('schema.yaml', `../directus/migrations/schema.yaml`)
}

async function main() {
  await removeSchemaFileFromDockerContainer();
  await exportDataModelToSchemaFileOnDockerDirectusInstance();
  await copyDirectusSchemaGeneratedToMigrationFolder();

  copyGeneratedSchemaToHistoryFolder();
  copyGeneratedSchemaToDirectusMigrationsFolder();
}

main();