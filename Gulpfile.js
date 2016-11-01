'use strict';

/* Raconteur Gulpfile scaffold. */
/* Includes code adapted from Gulp documentation, among other sources. */

/* Imports */
var watchify    = require('watchify'),
    browserify  = require('browserify'),
    browserSync = require('browser-sync'),
    gulp        = require('gulp'),
    source      = require('vinyl-source-stream'),
    gutil       = require('gulp-util'),
    coffeify    = require('coffeeify'),
    less        = require('gulp-less'),
    minifyCSS   = require('gulp-minify-css'),
    uglify      = require('gulp-uglify'),
    buffer      = require('vinyl-buffer'),
    zip         = require('gulp-zip'),
    _           = require('lodash');

var reload = browserSync.reload;

/* Tasks */

/* Trivial file copies */

function html (target) {
  return function () {
    return gulp.src('html/index.html')
          .pipe(gulp.dest(target));
    };
}

function img (target) {
  return function () {
    return gulp.src(['img/*.png', 'img/*.jpeg', 'img/*.jpg'])
          .pipe(gulp.dest(target));
    };
}

gulp.task('html', html('./build'));
gulp.task('img', img('./build/img'));

/* Less */

gulp.task('less', function () {
  gulp.src('less/main.less')
      .pipe(less())
      .pipe(gulp.dest('./build/css'));
});

/* Bundle libraries */

var undumBundler = browserify({debug: true});
undumBundler.require('undum-commonjs');

gulp.task('buildUndum', function () {
  return undumBundler.bundle().pipe(source('undum.js')).pipe(gulp.dest('./build/game'));
});

/* Generate JavaScript with browser sync. */

var customOpts = {
  entries: ['./game/main.coffee'],
  debug: true,
  transform: [coffeify]
};

var opts = _.assign({}, watchify.args, customOpts);
var bundler = watchify(browserify(opts));
bundler.external('undum-commonjs');

gulp.task('coffee', ['buildUndum'], bundle); // `gulp coffee` will generate bundle
bundler.on('update', bundle); // Re-bundle on dep updates
bundler.on('log', gutil.log); // Output build logs to terminal

function bundle () {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/game'));
};

/* Make a development build */

gulp.task('build', ['html', 'img', 'less', 'coffee'], function () {

});

/* Start a development server */

gulp.task('serve', ['build'], function () {
  browserSync({
    server: {
      baseDir: 'build'
    }
  });

  var lessListener = function () {
    reload('./build/css/main.css');
  }

  gulp.watch(['./html/*.html'], ['html']);
  gulp.watch(['./less/*.less'], ['less']);
  gulp.watch(['./img/*.png', './img/*.jpeg', './img/*.jpg'], ['img']);

  gulp.watch(['./build/css/main.css'], lessListener);
  gulp.watch(
    ['./build/game/bundle.js', './build/img/*', './build/index.html'],
    browserSync.reload);
});

/* Distribution tasks */

var undumDistBundler = browserify();
undumDistBundler.require('undum-commonjs');

gulp.task('undum-dist', function () {
  return undumDistBundler.bundle().pipe(source('undum.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/game'));
});

gulp.task('html-dist', html('./dist'));
gulp.task('img-dist', img('./dist/img'));

gulp.task('less-dist', function () {
  return gulp.src('./less/main.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css'));
});

var distBundler = browserify({
  debug: false,
  entries: ['./game/main.coffee'],
  transform: ['coffeeify']
});

distBundler.external('undum-commonjs');

gulp.task('coffee-dist', ['undum-dist'], function () {
  return distBundler.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(gulp.dest('./dist/game'));
});

gulp.task('dist', ['html-dist', 'img-dist', 'less-dist', 'coffee-dist'],
  function () {
    return;
});

gulp.task('zip', ['dist'], function () {
  return gulp.src('dist/**', { nodir: true })
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('.'));
});
