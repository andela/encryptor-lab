'use strict';

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');

gulp.task('main-bower', function () {
  return gulp.src(mainBowerFiles(), { base: "bower_components"})
    .pipe(gulp.dest("js/lib"));
});

