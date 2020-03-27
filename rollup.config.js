import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import strip from '@rollup/plugin-strip';
import { terser } from "rollup-plugin-terser";

const CONSTANTS = {
    input: 'src/index.js',
    output: {
        globals: {
            'styled-components': 'styled',
            'prop-types': 'PropTypes',
            'react': 'React',
        },
    },
    plugins: {
        resolve: {
            extensions: ['.js', '.jsx']
        },
        babel: {
            exclude: 'node_modules/**'
        }
    },
    external: ['styled-components', 'prop-types', 'react']
}

export default [
  {
    input: CONSTANTS.input,
    output: {
      file: 'lib/bundle.es.js',
    },
    plugins: [
      resolve(CONSTANTS.plugins.resolve),
      strip(),
      babel(CONSTANTS.plugins.babel),
      terser(),
    ],
    external: CONSTANTS.external,
  },
  {
    input: CONSTANTS.input,
    output: {
      file: 'lib/bundle.umd.js',
      name: 'ReactFlexboxSlim',
      format: 'umd',
      globals: CONSTANTS.output.globals,
    },
    plugins: [
        resolve(CONSTANTS.plugins.resolve),
        strip(),
        babel(CONSTANTS.plugins.babel),
        terser(),
    ],
    external: CONSTANTS.external,
  },
];
