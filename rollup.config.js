import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      file: pkg.browser,
      format: 'umd'
    },
    name: 'reactCurrencyFormatter',
    external: ['react', 'prop-types'],
    globals: {
      'react': 'React',
      'prop-types': 'PropTypes'
    },
    plugins: [
      resolve(),
      commonjs({
        namedExports: {
          'node_modules/react/react.js': ['Component']
        }
      }),
      babel({
        plugins: ['external-helpers'],
        exclude: ['node_modules/**']
      })
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // the `targets` option which can specify `dest` and `format`)
  {
    input: 'src/index.js',
    external: ['react', 'prop-types'],
    globals: {
      'react': 'React',
      'prop-types': 'PropTypes'
    },
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      resolve(),
      commonjs({
        namedExports: {
          'node_modules/react/react.js': ['Component']
        }
      }),
      babel({
        plugins: ['external-helpers'],
        exclude: ['node_modules/**']
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    ]
  }
];
