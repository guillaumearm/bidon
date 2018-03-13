// rollup.config.js
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

const outputs = [
  { format: 'cjs', outputFolder: 'lib' },
  { format: 'es', outputFolder: 'es' },
  { format: 'umd', outputFolder: 'dist' },
];

export default outputs.map(({ format, outputFolder }) => ({
  input: `src/index.js`,
  output: {
    name: 'Bidon',
    globals: {
      fs: 'fs',
      path: 'path',
      util: 'util',
    },
    format,
    file: `${outputFolder}/index.js`,
  },
  external: [
    'path',
    'util',
    'fs',
  ],
  plugins: [
    babel(),
    globals(),
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
