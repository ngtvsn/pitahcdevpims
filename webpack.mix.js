const mix = require('laravel-mix');
require('laravel-mix-artisan-serve');
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

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .styles([
        'node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css',
        'node_modules/datatables.net-responsive-bs4/css/responsive.bootstrap4.css',
        'node_modules/flatpickr/dist/flatpickr.min.css'
    ], 'public/css/datatables.css')
    .scripts([
        'node_modules/flatpickr/dist/flatpickr.min.js'
    ], 'public/js/flatpickr.js').serve({
        host: '127.0.0.1',
        port: '8002',
      });
