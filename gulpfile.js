var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    webserver = require('gulp-webserver'),
    clean = require('gulp-clean'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js');

gulp.task("webpack:build-dev", function(callback) {
    var myDevConfig = Object.create(webpackConfig);
    myDevConfig.devtool = "sourcemap";
    myDevConfig.debug = true;
    webpack(myDevConfig, function(err, stats) {
        livereload.reload();
        callback();
    });
});

gulp.task("webpack", function(callback) {
    var myConfig = Object.create(webpackConfig);
    webpack(myConfig, function(err, stats) {
        callback();
    });
});

gulp.task('clean', function() {
    return gulp.src('./dist/*', {read: false})
        .pipe(clean());
});

gulp.task('default', ['clean'], function() {
    gulp.start('webpack');
});

gulp.task('build:build-dev', ['clean'], function() {
    gulp.start('webpack:build-dev');
});

gulp.task('webserver', ['build:build-dev'], function() {
    gulp.src( './dist/' )
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});

gulp.task('watch', ['webserver'], function() {
    livereload.listen();
    gulp.watch('./src/**', ['webpack:build-dev']);
});