const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

/*
  --TOP LEVEL FUNCTIONS
 gulp.tasks - Define tasks
 gulp.src - Point to files to use
 gulp.dest - Point to the folder to output,
 gulp.watch - Watch files and folders for changes

 */

//Logs Message
gulp.task('message', function () {
    return console.log("hej");
});

//Copy All Html files
gulp.task('copyHtml', function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

//Minify Js
gulp.task('minify', function () {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//Compile Sass
gulp.task('sass', function () {
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
});

// Copy All Images
gulp.task('copyImages', function () {
    gulp.src('src/img/*')
        .pipe(gulp.dest('dist'));
});



gulp.task('default', ['message', 'copyImages', 'copyHtml', 'imageMin', 'sass', 'minify']);

gulp.task('watch', function () {
    gulp.watch('src/*.html', ['copyHtml']);
    gulp.watch('src/img/*', ['copyImages']);
    gulp.watch('src/img/*', ['imageMIn']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/jquery/*.js', ['minify']);
});
//calling watch task
gulp.task('default', ['watch'], function () {
    gulp.start();
});