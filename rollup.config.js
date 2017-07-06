// rollup.config.js
import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'main.js',
    dest: 'prod/main.js',
    format: 'iife',
    plugins: [
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [ [ 'es2015', { 'modules': false } ], 'es2016', 'es2017', 'react' ],
            plugins: [ [ 'transform-runtime', {
                "helpers": false,
                "polyfill": false,
                "regenerator": true,
            } ] ],
        }),
        cjs(),
        replace({
            'process.env.NODE_ENV': '"production"'
        }),
        resolve({
            browser: true,
            jsnext: true,
        }),
        uglify(),
    ],
};
