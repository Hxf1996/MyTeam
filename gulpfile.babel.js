import gulp from "gulp";
import livereload from "gulp-livereload";
import webserver from "gulp-webserver";
import clean from "gulp-clean";

import webpack from "webpack";
import webpackConfig from "./webpack.config.js";
import webpackConfigDev from "./webpack.config-dev.js";

gulp.task("webpack:build", function(callback) {
    let buildConfig = Object.create(webpackConfig);
    webpack(buildConfig, function(err, stats) {
        livereload.reload();
        callback();
    });
});

gulp.task("webpack:build-dev", function(callback) {
    let devBuildConfig = Object.create(webpackConfigDev);
    devBuildConfig.devtool = "sourcemap";
    devBuildConfig.debug = true;
    webpack(devBuildConfig, function(err, stats) {
        callback();
    });
});

gulp.task("clean", function() {
    return gulp.src("./dist/*", {read: false})
        .pipe(clean());
});

gulp.task("default", ["clean"], function() {
    gulp.start("webpack:build");
});

gulp.task("build:build-dev", ["clean"], function() {
    gulp.start("webpack:build-dev");
});

gulp.task("webserver", ["build:build-dev"], function() {
    gulp.src( "./dist/" )
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});

gulp.task("watch", ["webserver"], function() {
    livereload.listen();
    gulp.watch("./src/**", ["webpack:build-dev"]);
});