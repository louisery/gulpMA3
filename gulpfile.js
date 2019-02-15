var gulp = require('gulp');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var path = require('path');
 
gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('browser-sync', function () {
    browserSync.init(['css/*.css'], {
        server: {
            baseDir: './'
        }
    });
});

gulp.task('minify-images', function () {
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/resized-images'))
});

gulp.task('default', ['less', 'browser-sync', 'minify-images'], function () {
    gulp.watch("less/*.less", ['less']);
});
