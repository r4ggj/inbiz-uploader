const { series } = require('gulp');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var gulpCopy = require('gulp-copy');
const cleanDir = require('gulp-clean-dir');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

gulp.task('jsmin', function () {
    var options={
        enclose:"global:window"
    }
   return gulp.src([
    'src/js/util.js',
    'src/js/export.js',
    'src/js/error/error.js',
    'src/js/version.js',
    'src/js/features.js',
    'src/js/promise.js',
    'src/js/blob-proxy.js',
    'src/js/button.js',
    'src/js/upload-data.js',
    'src/js/uploader.basic.api.js',
    'src/js/uploader.basic.js',
    'src/js/ajax.requester.js',
    'src/js/upload-handler/upload.handler.js',
    'src/js/upload-handler/upload.handler.controller.js',
    'src/js/window.receive.message.js',
    'src/js/upload-handler/form.upload.handler.js',
    'src/js/upload-handler/xhr.upload.handler.js',
    'src/js/deletefile.ajax.requester.js',
    'src/js/image-support/megapix-image.js',
    'src/js/image-support/image.js',
    'src/js/image-support/exif.js',
    'src/js/identify.js',
    'src/js/image-support/validation.image.js',
    'src/js/session.js',
    'src/js/session.ajax.requester.js',
    'src/js/image-support/scaler.js',
    'src/js/third-party/ExifRestorer.js',
    'src/js/total-progress.js',

    'src/js/paste.js',
    'src/js/form-support.js',
    //traditional
    'src/js/traditional/traditional.form.upload.handler.js',
    'src/js/traditional/traditional.xhr.upload.handler.js',
    'src/js/traditional/all-chunks-done.ajax.requester.js',
    //ui
    'src/js/dnd.js',
    'src/js/uploader.api.js',
    'src/js/uploader.js',
    'src/js/templating.js',
    'src/js/ui.handler.events.js',
    'src/js/ui.handler.click.filebuttons.js',
    'src/js/ui.handler.click.filename.js',
    'src/js/ui.handler.focusin.filenameinput.js',
    'src/js/ui.handler.focus.filenameinput.js',
    'src/js/ui.handler.edit.filename.js'
    ])
    .pipe(cleanDir('./dist/inbiz-uploader/'))
    .pipe(sourcemaps.init())
    .pipe(concat('inbiz-uploader.js')) 
    .pipe(uglify(options))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest('dist/inbiz-uploader'))
});

gulp.task('gif', function () {
    var sourceFiles=["src/*.gif"];
    return gulp
    .src(sourceFiles)
    .pipe(gulpCopy("", {}))
    //.pipe(otherGulpFunction())
    .pipe(gulp.dest("dist/inbiz-uploader"));
 });
 gulp.task('placeholders', function () {
    var sourceFiles=["src/placeholders/*"];
    return gulp
    .src(sourceFiles)
    .pipe(gulpCopy("", {}))
    //.pipe(otherGulpFunction())
    .pipe(gulp.dest("dist/inbiz-uploader/placeholders"));
 });
 
 gulp.task('html', function () {
    var sourceFiles=["src/html/templates/*"];
    return gulp
    .src(sourceFiles)
    .pipe(gulpCopy("", {}))
    //.pipe(otherGulpFunction())
    .pipe(gulp.dest("dist/inbiz-uploader/templates"));
 });
 gulp.task('fine-uploader-gallery-css', function () {
    var sourceFiles=["src/fine-uploader-gallery.css"];
    var plugins = [
      autoprefixer({
         browsers: ['last 1 version'],
         overrideBrowserslist:[
            "Android 4.1",
            "IOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 9"
         ]
       }),
      cssnano()
  ];
    return gulp
    .src(sourceFiles)
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("dist/inbiz-uploader"));
 });
 gulp.task('fine-uploader-css', function () {
    var sourceFiles=["src/fine-uploader.css"];
    var plugins = [
      autoprefixer({
         browsers: ['last 1 version'],
         overrideBrowserslist:[
            "Android 4.1",
            "IOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 9"
         ]
       }),
      cssnano()
  ];
    return gulp
    .src(sourceFiles)
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("dist/inbiz-uploader"));
 });
 gulp.task('fine-uploader-new-css', function () {
    var plugins = [
        autoprefixer({
           browsers: ['last 1 version'],
           overrideBrowserslist:[
              "Android 4.1",
              "IOS 7.1",
              "Chrome > 31",
              "ff > 31",
              "ie >= 9"
           ]
         }),
        cssnano()
    ];
    var sourceFiles=["src/fine-uploader-new.css"];
    return gulp
    .src(sourceFiles)
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("dist/inbiz-uploader"));
 });
 

 exports.default = series(["jsmin","html","gif","placeholders","fine-uploader-gallery-css","fine-uploader-new-css","fine-uploader-css"]);