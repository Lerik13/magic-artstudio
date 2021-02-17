const {
	src,
	dest,
	parallel,
	series,
	watch
} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
//const fileinclude = require('gulp-file-include');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
//const rsync = require('gulp-rsync');
const del = require('del');

//const lazyload = require('lazyload');

function browsersync() {
	browserSync.init({
		server: {
			baseDir: 'app/'
		},
		notify: false
	})
}

function scripts() {
	return src([
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/parallax-js/dist/parallax.min.js',
			//'node_modules/jquery-parallax/scripts/jquery.parallax-1.1.3.js',
			'node_modules/slick-carousel/slick/slick.js',
			'node_modules/wowjs/dist/wow.js',
			//'node_modules/lazyload/lazyload.js',
			'app/js/libs.min.js',
			'app/js/modernizr-custom.js',
			//'app/js/_lazy.js',
			'app/js/_custom.js',
		])
		//.pipe(fileinclude())
		.pipe(concat('scripts.min.js'))
		.pipe(uglify())
		.pipe(dest('app/js/'))
		.pipe(browserSync.stream())
}

function styles() {
	//return src('app/scss/style.scss')
	return src([
			'node_modules/slick-carousel/slick/slick.css',
			'node_modules/animate.css/animate.css',
			'app/scss/style.scss'
			//'node_modules/magnific-popup/dist/magnific-popup.css',
		])
		//.pipe(sass())
		.pipe(sass({
			/*includePaths: require('node-normalize-scss').with(
				'node_modules/slick-carousel/slick/slick.css',
				'node_modules/animate.css/animate.css',
			)*/
			includePaths: require('node-normalize-scss').includePaths
		}))
		.pipe(concat('styles.min.css'))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 10 versions'],
			grid: true
		}))
		.pipe(cleancss(({
			level: {
				1: {
					specialComments: 0
				}
			} /*, format: 'beautify'*/
		})))
		.pipe(dest('app/css/'))
		.pipe(browserSync.stream())
}

function images() {
	return src('app/images/src/**/*')
		.pipe(newer('app/images/dest/'))
		.pipe(imagemin())
		.pipe(dest('app/images/dest/'))
}

function cleanimg() {
	return del('app/images/dest/**/*', {
		force: true
	})
}

function cleandist() {
	return del('dist', {
		force: true
	})
}

function buildcopy() {
	return src([
			'app/css/**/*.min.css',
			'app/js/**/*.min.js',
			'app/images/dest/**/*',
			'app/**/*.html',
			'app/fonts/**/*',
		], {
			base: 'app'
		})
		.pipe(dest('dist/**/*'))
}
/*
function deploy() {
	return src('dist/**')
	.pipe(rsync({
		root: 'dist/',
		hostname: 'magic-artstudio.com/v2/',
		destination: 'path/to/site/'
	}))
}
*/
function startwatch() {
	watch('app/scss/**/*.scss', styles);
	watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
	watch('app/**/*.html').on('change', browserSync.reload);
	watch('app/images/src/**/*', images)
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.cleanimg = cleanimg;

exports.build = series(cleandist, styles, scripts, images, buildcopy);

exports.default = parallel(styles, scripts, browsersync, startwatch);