var gulp = require("gulp");

var cssnano = require("gulp-cssnano");
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');

gulp.task("css", function() {
  gulp
    .src("./src/css/*.css")
    .pipe(concat("index-merge.css"))
    .pipe(cssnano())
    .pipe(gulp.dest("dist/css/"));
});



gulp.task("js", function() {
    gulp
      .src("./src/js/*.js")
      .pipe(concat("index-merge.js"))
      .pipe(uglify())
      .pipe(gulp.dest("dist/js/"));
  });
  
  gulp.task('build', ['css', 'js']);