const {src, dest} = require('gulp')
const concat = require('gulp-concat')

const cssBundle = () =>
    src('src/assets/style/**/*.css')
.pipe(concat('style.css'))
.pipe(dest('dist/css'))

exports.cssBundle = cssBundle