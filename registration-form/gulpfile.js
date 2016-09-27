'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('sass:watch', ['browser-sync', 'sass'], function () {
  gulp.watch('app/sass/**/*.scss', ['sass']);
});
gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: 'app' 
		},
		notify: false
	});
});