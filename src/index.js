import { promisify } from 'util';
import fs from 'fs';

const readFile = promisify(fs.readFile);
const readJsonFile = async (filePath) => {
  return JSON.parse(await readFile(filePath, 'utf8'))
}

module.exports = async function main() {
  const { version } = await readJsonFile('./package.json');
  console.warn(`v${version}`);
};
