var gulp = require('gulp');
var elixir = require('laravel-elixir');
var argv = require('yargs').argv;

elixir.config.assetsPath = 'source/_assets';
elixir.config.publicPath = 'source';

elixir(function(mix) {
    var env = argv.e || argv.env || 'local';
    var port = argv.p || argv.port || 3000;

   	mix
   		.copy('vendor/bower/jquery/dist/jquery.min.js', 'source/_assets/js/vendor/jquery.js')
		.less('app.less')

	     	.scripts([
	     		'vendor/jquery.js',
	         	'uikit/uikit.min.js',
	         	'uikit/components/slideshow.min.js',
	         	'uikit/components/sticky.min.js',
	         	'uikit/components/slideshow-fx.min.js',
	         	// 'app.js',
	     	], 'source/js/app.js')

	     // .version(['css/app.css', 'js/all.js'])
	     .exec('jigsaw build ' + env, ['./source/*', './source/**/*', '!./source/_assets/**/*'])
	     .browserSync({
	         port: port,
	         server: { baseDir: 'build_' + env },
	         proxy: null,
	         files: [ 'build_' + env + '/**/*' ]
	     });
});
