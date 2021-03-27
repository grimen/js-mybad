
/* =========================================
      IMPORTS
-------------------------------------- */

import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import cleanup from 'rollup-plugin-cleanup'
import cleaner from 'rollup-plugin-cleaner'
import builtins from 'rollup-plugin-node-builtins'

import pkg from './package.json'

/* =========================================
      CONFIG
-------------------------------------- */

const config = [
    {
        input: pkg.main,
        output: {
            file: pkg.browser,
            format: 'umd',
            name:  pkg.name.split('/')[1],
        },
        plugins: [
            cleaner({
                targets: [
                    path.dirname(pkg.browser),
                ],
            }),
            builtins(),
            resolve(),
            commonjs(),
            babel({ babelHelpers: 'bundled' }),
            cleanup(),
        ],
    },
]

/* =========================================
      EXPORTS
-------------------------------------- */

export default config
