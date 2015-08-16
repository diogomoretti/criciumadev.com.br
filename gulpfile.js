var gulp = require('gulp');
var nib = require('nib');
var gulpStylus = require('gulp-stylus');

var PATH = {
  stylus: {
    src: 'styles/**/*.styl',
    dist: 'dist'
  }
}

gulp.task('stylus', function () {
  gulp.src(PATH.stylus.src)
    .pipe(gulpStylus({
      use: [nib()]
    }))
    .pipe(
      gulp.dest(PATH.stylus.dist)
    );
});

gulp.task('watch', function () {
  gulp.watch(PATH.stylus.src, ['stylus']);
});