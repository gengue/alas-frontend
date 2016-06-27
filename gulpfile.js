var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var ngHtml2Js = require('gulp-ng-html2js');
var minifyHtml = require('gulp-minify-html');
var angularFilesort = require('gulp-angular-filesort');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant'); // $ npm i -D imagemin-pngquant
var babel = require("gulp-babel");
var connect = require('gulp-connect');


var htmlminOpts = {
  removeComments: true,
  collapseWhitespace: true,
  removeEmptyAttributes: false,
  collapseBooleanAttributes: true,
  removeRedundantAttributes: true
};


var paths = {
  sass: ['./src/**/**/*.scss' ],
  js: ['./src/app/**/**/*.js'],
  templates: ['./src/**/**/*.html'],
  vendor: ['./vendor/**/*.js', './vendor.json'],
  img : ['./src/assets/img/*']
};

gulp.task('default', ['sass', 'js', 'vendor', 'templates', 'images', 'fonts']);

  /*
    | --- SASS -----------------------------------------------
    */

gulp.task('sass', function(done) {
  gulp.src('./src/scss/main.scss')
  //.pipe(cache('css'))
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(concat('main.css'))
  .pipe(sass())
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(rename({ extname: '.min.css' }))
  .pipe(sourcemaps.write('../maps'))
  .pipe(gulp.dest('./public/css/'))
  .pipe(connect.reload())
  .on('end', done);
});

/*
  | --- JS -------------------------------------------------
  */

gulp.task('vendor', function(done) {

  var vendorFiles = require('./vendor.json');

  gulp.src(vendorFiles)
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(concat('vendor.js'))
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(sourcemaps.write('../maps'))
  .pipe(gulp.dest('./public/js/'))
  .pipe(connect.reload())
  .on('end', done);
});

gulp.task('js', function(done) {
  gulp.src(paths.js)
  .pipe(babel())
  .pipe(angularFilesort())
  .pipe(concat('bundle.js'))
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(ngAnnotate())
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(sourcemaps.write('../maps'))
  .pipe(gulp.dest('./public/js/'))
  .pipe(connect.reload())
  .on('end', done);
});

/*
  | --- Templates ------------------------------------------
  */

gulp.task('templates', function(done) {
  gulp.src(paths.templates)
  //.pipe(cache('templates'))
  .pipe(minifyHtml({
    empty: true,
    spare: true,
    juotes: true
  }))
  .pipe(ngHtml2Js({
    moduleName: 'templates'
  }))
  .pipe(concat('templates.js'))
  .pipe(ngAnnotate())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(uglify())
  .pipe(gulp.dest('./public/js/'))
  .pipe(connect.reload())
  .on('end', done);
});

/*
  | --- Fonts ------------------------------------------
  */

gulp.task('fonts', function() {
  return gulp.src([
    './src/assets/**/*.wff2',  
    './src/assets/**/*.woff', 
    './src/assets/**/*.woff2', 
    './src/assets/**/*.ttf', 
    './src/assets/**/*.svg', 
    './src/assets/**/*.eot'
  ])
  .pipe(gulp.dest('./public/assets'));
});

gulp.task('images', function() {
  return gulp.src(paths.img)
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('./public/assets/img'));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.vendor, ['vendor']);
  gulp.watch(paths.templates, ['templates']);
  gulp.watch(paths.img, ['images']);
});

gulp.task('serve', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.vendor, ['vendor']);
  gulp.watch(paths.templates, ['templates']);
  gulp.watch(paths.img, ['images']);

  connect.server({
    root: 'public',
    port: 3000,
    host: 'localhost',
    livereload: true,
    fallback: 'public/index.html'
  });
});


