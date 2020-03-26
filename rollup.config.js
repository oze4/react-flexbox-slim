import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  external: ['styled-components', 'prop-types']
};
