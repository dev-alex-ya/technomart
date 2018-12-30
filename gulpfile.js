"use strict";

let gulp = require("gulp");
let pug = require('gulp-pug');
let sass = require("gulp-sass");
let plumber = require("gulp-plumber");
let postcss = require("gulp-postcss");
let autoprefixer = require("autoprefixer");
let sourcemaps = require("gulp-sourcemaps");
let server = require("browser-sync");

gulp.task("sass", function() {
    gulp.src("src/sass/main.scss")
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task('pug', function buildHTML() {
    return gulp.src('src/pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest("build"))
});

gulp.task("serve", ["pug", "sass"], function(){
    server.init({
        server: "./build",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("sass/**/*.{scss,sass}", ["style"]);
    gulp.watch("*.html", server.reload);
});