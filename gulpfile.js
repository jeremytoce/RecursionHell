var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var babel = require('gulp-babel');


function logError(e){
  console.log(e);
}

gulp.task('sass', function (){
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

gulp.task('react-js', function (){
  return gulp.src('./jsx/**/*.jsx')
    .pipe(babel({
      presets: ['react']
    }).on('error', logError))
    .pipe(gulp.dest('js'));
});

gulp.task('react-js-components', function (){
  return gulp.src('./jsx-components/**/*.jsx')
    .pipe(babel({
      presets: ['react']
    }).on('error', logError))
    .pipe(gulp.dest('js-components'));
});

gulp.task('watch', function (){
  livereload.listen();
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./jsx/**/*.jsx', ['react-js']);
  gulp.watch('./jsx-components/**/*.jsx', ['react-js-components']);
});

