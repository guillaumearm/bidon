import { version } from '../package.json';
import './empty';

export default function main() {
  console.warn(`v${version}`);
}
