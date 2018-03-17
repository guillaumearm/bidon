import { version } from '../package.json';
import './empty';

export default function main() {
  console.log('hello jb')
  console.warn(`v${version}`);
}
