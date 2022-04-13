import dotenv from 'dotenv';
import { exec } from 'child_process';
import { copyFileSync, readdirSync } from 'fs';

function getCurrentDirectory() {
  return process.cwd();
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

/**
 * Scripts to copy generated files to the folders of use
 */

function copySdkToNestFolder(filename) {
  copyFileSync(`./${filename}/${filename}.sdk.ts`, `../nestjs/src/features/${filename}/${filename}.sdk.ts`);
}

function copyMockToNestFolder(filename) {
  copyFileSync(`./${filename}/${filename}.mock.ts`, `../nestjs/src/features/${filename}/${filename}.mock.ts`);
}

function copyHooksToReactFolder(filename) {
  copyFileSync(`./${filename}/${filename}.hooks.ts`, `../react/src/hooks/${filename}.hooks.ts`);
}

export function copyGeneratedFilesToUsageFolders(filename) {
  copySdkToNestFolder(filename);
  copyMockToNestFolder(filename);
  copyHooksToReactFolder(filename);
}