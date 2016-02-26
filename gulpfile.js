const gulp = require('gulp');
const sync = require('run-sequence');
const browser = require('browser-sync');
const webpack = require('webpack-stream');
const eslint = require('gulp-eslint');

const paths = {
  entry: 'client/app/app.js',
  app: ['client/app/**/*.{js,less,html}', 'client/styles/**/*.less'],
  js: 'client/app/**/*!(.spec.js).js',
  less: ['client/app/**/*.less', 'client/style/**/*.less'],
  toCopy: ['client/index.html', 'client/assets/images/*'],
  html: ['client/index.html', 'client/app/**/*.html'],
  dest: 'dist'
};

gulp.task('lint', () => gulp.src(['client/app/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
);

gulp.task('build', ['lint'], () => gulp.src(paths.entry)
  .pipe(webpack(require('./webpack.config')))
  .pipe(gulp.dest(paths.dest))
);

gulp.task('serve', () => {
  browser({
    port: process.env.PORT || 4500,
    open: false,
    ghostMode: false,
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('copy', () => gulp
  .src(paths.toCopy, { base: 'client/' })
  .pipe(gulp.dest(paths.dest))
);

gulp.task('watch', () => {
  gulp.watch(paths.app, ['build', browser.reload]);
  gulp.watch(paths.toCopy, ['copy', browser.reload]);
});

gulp.task('default', (done) => {
  sync('build', 'copy', 'serve', 'watch', done);
});
