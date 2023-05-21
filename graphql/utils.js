import dotenv from 'dotenv';
import { exec } from 'child_process';
import { copyFileSync, readdirSync, existsSync, readFileSync, writeFileSync } from 'fs';

function getCurrentDirectory() {
  return process.cwd();
}

function getFileContent(filePath) {
  return readFileSync(filePath, { encoding: 'utf8' });
}

function replaceAllOccurrencesOnAString(originalString, searchString, replacementString) {
  return String(originalString).replace(new RegExp(searchString, 'g'), replacementString);
}

export function setDotenvConfiguration() {
  dotenv.config({ path: `${getCurrentDirectory()}/../.env` });
}

export function shellCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) reject(error);

      resolve(stdout ? stdout : stderr);
    });
  });
}

export function getFeaturesDirectoriesExcludingNodeModules() {
  return readdirSync(getCurrentDirectory(), { withFileTypes: true })
    .filter(directory => directory.isDirectory())
    .map(directory => directory.name)
    .filter(filename => filename !== 'node_modules');
}

export function getFeaturesPassedAsArgumentsOfStartCommand() {
  const features = process.argv.slice(2);

  return features.length > 0 ? features : null;
}


/**
 * Adapt React Query Codegen files generated to Svelte Query 
 */

function getReactQueryHookContentAdaptedToSvelteQuery(hookFilePath) {
  let content = getFileContent(hookFilePath);

  content = replaceAllOccurrencesOnAString(content, 'react-query', 'svelte-query');
  content = replaceAllOccurrencesOnAString(content, 'useMutation', 'createMutation');
  content = replaceAllOccurrencesOnAString(content, 'useQuery', 'createQuery');
  content = replaceAllOccurrencesOnAString(content, 'UseMutationOptions<', 'MutationOptions<');
  content = replaceAllOccurrencesOnAString(content, 'UseQueryOptions<', 'QueryOptions<');
  content = replaceAllOccurrencesOnAString(content, 'UseMutationOptions', 'type MutationOptions');
  content = replaceAllOccurrencesOnAString(content, 'UseQueryOptions', 'type QueryOptions');

  return content;
}

/**
 * Scripts to copy generated files to the folders of use
 */

function copySdkToNestFolder(filename) {
  const sdkGeneratedFilePath = `./${filename}/${filename}.sdk.ts`;

  if (existsSync(sdkGeneratedFilePath))
    copyFileSync(sdkGeneratedFilePath, `../nestjs/src/features/${filename}/${filename}.sdk.ts`);
}

function copyMockToNestFolder(filename) {
  const mockGeneratedFilePath = `./${filename}/${filename}.mock.ts`;

  if (existsSync(mockGeneratedFilePath))
    copyFileSync(mockGeneratedFilePath, `../nestjs/src/features/${filename}/${filename}.mock.ts`);
}

function copyHooksToReactFolder(filename) {
  const hooksGeneratedFilePath = `./${filename}/${filename}.hooks.ts`;

  if (existsSync(hooksGeneratedFilePath))
    copyFileSync(`./${filename}/${filename}.hooks.ts`, `../react/src/hooks/${filename}.hooks.ts`);
}

function copyHooksToSvelteFolder(filename) {
  const hooksGeneratedFilePath = `./${filename}/${filename}.hooks.ts`;

  if (existsSync(hooksGeneratedFilePath)) {
    writeFileSync(`../svelte/src/hooks/${filename}.hooks.ts`, getReactQueryHookContentAdaptedToSvelteQuery(hooksGeneratedFilePath));
  }
}

export function copyGeneratedFilesToUsageFolders(filename) {
  copySdkToNestFolder(filename);
  copyMockToNestFolder(filename);
  copyHooksToReactFolder(filename);
  copyHooksToSvelteFolder(filename);
}