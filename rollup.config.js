
'use strict';

const replace = require('@rollup/plugin-replace');
const lwc = require('@lwc/rollup-plugin');

const env = process.env.NODE_ENV || 'development';

module.exports = {
    input: 'src/main.js',
    output: {
        file: 'dist/main.js',
        format: 'iife',
    },
    plugins: [
        lwc({
            modules: [
                {
                    dir: 'modules'
                }
            ]
        }),
        replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
    ]
}