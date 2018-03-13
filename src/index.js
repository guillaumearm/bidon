import { resolve } from 'path';
import { promisify } from 'util';
import fs from 'fs';

const readFile = promisify(fs.readFile);
const readJsonFile = async (filePath) => {
  return JSON.parse(await readFile(filePath, 'utf8'))
}

import './empty';

module.exports = async function main() {
  const packageJsonPath = resolve(__dirname, '..', 'package.json');
  const { version } = await readJsonFile(packageJsonPath);
  console.warn(`v${version}`);
};
