let gulp = require("gulp");
let browserify = require("browserify");
let reactify = require("reactify");
let source = require("vinyl-source-stream");

gulp.task("browserify", function(){
  return browserify("./src/main.jsx")
    .transform("reactify")
    .bundle()
    .pipe(source("main.js"))
    .pipe(gulp.dest("public/js"));
});

gulp.task("watch", function() {
  gulp.watch("./src/**/*.*", gulp.series("browserify"));
});

gulp.task("default", gulp.series("watch"));
