const gulp = require('gulp');
const concat = require('gulp-concat')



gulp.task('scripts', function () {
    return gulp.src('src/scripts/app.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build/scripts'));
});
