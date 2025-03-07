import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

function pgl(plugins = []) {
  return [
    json(),
    nodeResolve(),
    commonjs(),
    ...plugins
  ];
}

const config = [
  {
    input: 'src/index.js',
    output: [
      { file: 'dist/index.cjs', format: 'cjs' },
      { file: 'dist/index.js', format: 'es' }
    ],
    external: [
      'min-dash'
    ],
    plugins: pgl()
  },
  {
    input: 'src/zeebe/index.js',
    output: [
      { file: 'zeebe/index.cjs', format: 'cjs' },
      { file: 'zeebe/index.js', format: 'es' }
    ],
    external: [
      'min-dash'
    ],
    plugins: pgl()
  }
];

export default config;