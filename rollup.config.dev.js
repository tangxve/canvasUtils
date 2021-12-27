import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import camelCase from 'lodash.camelcase'
import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const pkg = require('./package.json')

const libraryName = 'PostersCanvas'

console.log('pkg', pkg)

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      name: camelCase(libraryName),
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
    serve({
      open: true,
      port: 1111,
      contentBase: './',
      openPage: '/examples/index.html'
    }),
    typescript({ useTsconfigDeclarationDir: true })
  ]
}
