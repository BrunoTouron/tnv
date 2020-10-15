var gulp            = require("gulp");
var browserSync     = require("browser-sync").create();
var sass            = require("gulp-sass");
var sourcemaps      = require('gulp-sourcemaps');
var gulpSequence    = require('gulp-sequence')

gulp.task("serve", ["sass"], function() {
    gulp.watch("src/assets/css/sass/**/*.scss", ["sass"]);
});


// CSS
gulp.task("sass", function() {
    return gulp.src("src/assets/css/sass/style.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }).on("error", sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("src/assets/css"))
        .pipe(browserSync.stream());
});


gulp.task("default", gulpSequence('serve'));
