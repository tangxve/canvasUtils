import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import camelCase from 'lodash.camelcase'
import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import babel from 'rollup-plugin-babel'
import del from 'rollup-plugin-delete'
import path from 'path'

const pkg = require('./package.json')

const libraryName = 'canvasUtils'

console.log('pkg', pkg)

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.jsdelivr,
      // name: camelCase(libraryName),
      name: 'canvasUtils',
      format: 'umd', sourcemap: true
    },
    { file: pkg.module, format: 'es', sourcemap: true }
  ],
  external: [],
  watch: {
    include: 'src/**'
  },
  plugins: [
    json(),
    commonjs(),
    resolve(),
    sourceMaps(),
    livereload(),
    typescript({
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
      extensions: ['.js', '.ts']
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    del({
      targets: ['dist/*', 'build/*'],
      verbose: true,
      hook: 'buildEnd'

    }),
    serve({
      // open: true,
      port: 1111,
      contentBase: './',
      openPage: '/examples/index.html'
    })
  ]
}
