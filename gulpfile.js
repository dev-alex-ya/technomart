"use strict";

let gulp = require("gulp");
let sass = require("gulp-sass");
let plumber = require("gulp-plumber");
let postcss = require("gulp-postcss");
let autoprefixer = require("autoprefixer");
let server = require("browser-sync");

gulp.task("style", function(){
    gulp.src("sass/main.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function(){
    server.init({
        server: ".",
        notify: false,
        open: true,
        cors: true,
        ui:false
    });

    gulp.watch("sass/**/*.{scss,sass}", ["style"]);
});