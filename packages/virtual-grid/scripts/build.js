import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import fsExtra from 'fs-extra';
import { omit } from 'lodash-es';
const packageJsonPath = resolve('./', 'package.json');
const packageJsonContent = JSON.parse(readFileSync(packageJsonPath, 'utf8'));

async function createPackage() {
  packageJsonContent.main = 'index.umd.js';
  packageJsonContent.module = 'index.js';
  packageJsonContent.dependencies = omit(packageJsonContent.dependencies, 'vue');
  const fileStr = JSON.stringify(omit(packageJsonContent, 'scripts', 'devDependencies'), null, 2);
  await fsExtra.outputFile(resolve('./dist', `package.json`), fileStr, 'utf-8');
}

await createPackage();
