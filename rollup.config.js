import typescript from '@rollup/plugin-typescript';
import html from '@rollup/plugin-html';
import serve from 'rollup-plugin-serve';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const shouldServe = process.env.APP_SERVE;

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: 'src/main.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
  },
  plugins: [
    typescript(),
    html({
      title: 'Magnetic Bullet',
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    ...(shouldServe ? [serve('dist')] : []),
  ],
};

export default options;
