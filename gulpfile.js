
// include the required packages.
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');


// include, if you want to work with sourcemaps
var sourcemaps = require('gulp-sourcemaps');

// Get one .styl file and render
gulp.task('build', function () {
     gulp.src('./assets/styl/index.styl')
       .pipe(stylus())
       .pipe(gulp.dest('./assets/css/generated'));
});

// Get one .styl file and render
gulp.task('default', function () {
    watch('./assets/styl/*.styl', function () {
     gulp.src('./assets/styl/index.styl')
       .pipe(stylus())
       .pipe(gulp.dest('./assets/css/generated'));
   });
});
