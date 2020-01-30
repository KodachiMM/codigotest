const mix = require('laravel-mix');
const ChunkRenamePlugin = require('webpack-chunk-rename-plugin');

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

mix.js('resources/js/app.js', 'app.js')
	.extract([ 'vue', 'axios', 'vuex' ], 'vendor.js')
	.webpackConfig({
		plugins: [ 
			new ChunkRenamePlugin({
				initialChunksWithEntry: true,
				'/app': 'js/app.js',
				'/vendor': 'js/vendor.js',
			})
		],
		output: {
			filename: (chunkData) => {
				return chunkData.chunk.name === '/manifest' ? 'js/manifest.js' : 'js/[name].js';
			},
			chunkFilename: mix.inProduction() ? 'js/chunks/[name].[chunkhash].js' : 'js/chunks/[name].js'
		},
    });
    
// mix.sass('resources/sass/app.scss', 'public/css');