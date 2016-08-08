var gulp = require('gulp');
var gsass= require('gulp-sass');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var md= require('gulp-markdown');
var uglify = require('gulp-uglify')
var htmlSource=["src/*.html"];
var tsSource=["src/*.ts"];
var sass=["src/*.scss"];
var mdfile=["src/*.md"];

gulp.task('sampleTask', function() {
  console.log("sample-task execution.")
});

gulp.task("copy-html",function () {
    gulp.src(htmlSource).pipe(gulp.dest("dest"));
});
gulp.task("convert-md",function () {
    gulp.src(mdfile).pipe(md()).pipe(gulp.dest("dest"));
});

gulp.task("extract-sass",function () {
    gulp.src(sass).pipe(gsass({style:"expanded"})).pipe(gulp.dest("dest/css"));
});

gulp.task("compile-ts",function () {
    gulp.src(tsSource).pipe(ts(tsProject)).js.pipe(uglify()).pipe(gulp.dest("dest/js"));
});

gulp.task("watch-Man",function () {
    gulp.watch(tsSource,["compile-ts"]);
    gulp.watch(sass,["extract-sass"]);
    gulp.watch(htmlSource,["copy-html"]);

});

// 

gulp.task("Automate-Me",["copy-html","extract-sass","compile-ts","convert-md","watch-Man"]);
