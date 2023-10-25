const {src, dest} = require('gulp')
const concat = require('gulp-concat')

const cssBundle = () =>
    src('src/assets/styles/**/*.css')
.pipe(concat('styles.css'))
.pipe(dest('dist/css'))

exports.cssBundle = cssBundle