var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: './app'
        }
    });

    //scss
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/scss/main.scss', ['sass']);
    gulp.watch('app/*.html').on('change', browserSync.reload);
    //js
    gulp.watch("app/js/*.js", ['js-watch']);
});

gulp.task('sass', function(){
  return gulp.src('app/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

gulp.task('js-watch', function (done) {
    browserSync.reload();
    done();
});

gulp.task('default',['serve']);
