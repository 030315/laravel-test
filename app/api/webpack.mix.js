const mix = require('laravel-mix');
const path = require('path');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

if (process.env.npm_lifecycle_event !== 'hot') {
    mix.version();
}

mix.ts('resources/assets/ts/main.ts', 'public/js')
    .sass('resources/assets/ts/sass/application.scss', 'public/css')
    .webpackConfig({
        resolve: {
            alias: {
                '@': __dirname + '/resources/assets/ts'
            }
        },
        plugins: [
            new VuetifyLoaderPlugin()
        ]
    });
