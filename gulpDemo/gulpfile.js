var gulp = require("gulp");

var cssnano = require("gulp-cssnano");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
imagemin = require("gulp-imagemin");

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

gulp.task("img", function(argument) {
  gulp
    .src("src/imgs/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/imgs"));
});

gulp.task("build", ["css", "js", "img"]);
