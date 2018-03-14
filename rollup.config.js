// rollup.config.js
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import cli from 'rollup-plugin-cli';

const identity = x => x;

const outputs = [
  { format: 'cjs', outputFolder: 'dist', outputFile: 'cli.js', isCli: true },
  { format: 'cjs', outputFolder: 'lib', outputFile: 'index.js' },
  { format: 'es', outputFolder: 'es', outputFile: 'index.js' },
];

export default outputs.map(({ format, outputFolder, outputFile, isCli }) => ({
  input: isCli ? './cli.js' : `src/index.js`,
  output: {
    name: 'Bidon',
    globals: {
      fs: 'fs',
      path: 'path',
      util: 'util',
    },
    format,
    file: `${outputFolder}/${outputFile}`,
  },
  external: [
    'path',
    'util',
    'fs',
  ],
  plugins: [
    isCli ? cli() : identity,
    babel(),
    builtins(),
    nodeResolve({
      main: true,
      module: true,
      jsnext: true,
    }),

    commonjs({
      include: 'node_modules/**',
      extensions: [ '.js' ],
    }),
  ]
}))
