const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//function to compile sass file into css
function buildStyles() {
    return src('index.scss')
        .pipe(sass())
    .pipe(dest('css'))
}

//function to watch for changes in sass file add sync css updating
function watchTask() {
    watch(['index.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)