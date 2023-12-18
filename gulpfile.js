gulp = require('gulp');
sass = require('gulp-sass')(require('sass'));

gulp.task('sass', (cb) => {
 gulp
   .src('./styles/**/*.scss')
   .pipe(sass())
   .pipe(
     gulp.dest((f) => {
       return f.base;
     })
   );
 cb();
});

gulp.task(
 'default',
 gulp.series('sass', (cb) => {
   gulp.watch('./styles/**/*.scss', gulp.series('sass'));
   cb();
 })
);