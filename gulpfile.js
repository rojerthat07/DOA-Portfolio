const gulp = require('gulp');
const concat = require('gulp-concat')



gulp.task('scripts', function () {
    return gulp.src('src/scripts/shs-app.js')
        .pipe(concat('shs-app.js'))
        .pipe(gulp.dest('build/scripts'));
});
