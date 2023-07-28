const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const gulppug = require('gulp-pug');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const newer = require('gulp-newer');
const ts = require('gulp-typescript');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const del = require('del');

const paths = {
  pug:{
    src: './*.pug',
    dest: 'dist/pug/'
  },
  html:{
    src: './*.html',
    dest: 'dist/html/'
  },
  styles: {
    src: ['src/styles/**/*.sass', 'src/styles/**/*.scss'],
    dest: 'dist/css/'
  },
  scripts: {
    src: ['src/scripts/**/*.js', 'src/scripts/**/*.ts'],
    dest: 'dist/js/'
  },
  images: {
    src: 'src/img/**',
    dest: 'dist/img'
  }
}
//clean dist
function clean() {
  return del(['dist/*', '!dist/img']);
}
//convert styles
function styles(){
  return gulp.src(paths.styles.src)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))    //.pipe(less()) por ejemplo 
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(cleanCSS({
    level: 2
  }))
  .pipe(rename({
    basename: 'main',
    suffix: '.min'
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(size({
    showFiles:true
  }))
  .pipe(gulp.dest(paths.styles.dest))
  .pipe(browserSync.stream())
  
}

function pug(){
  return gulp.src(paths.pug.src)
  .pipe(gulppug({ collapseWhitespace: true }))
  .pipe(size())
  .pipe(gulp.dest(paths.html.dest))
  .pipe(browserSync.stream())
}
// HTML min

function html(){
  return gulp.src(paths.html.src)
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(size())
  .pipe(gulp.dest(paths.html.dest))
  .pipe(browserSync.stream())
}
  
//Min images
function img(){
  return gulp.src(paths.images.src)
  .pipe(newer(paths.images.dest))
  .pipe(imagemin({
    progressive: true
  }))
  .pipe(size({
    showFiles:true
  }))
  .pipe(gulp.dest(paths.images.dest))
}

//convert scripts
function scripts(){
  return gulp.src(paths.scripts.src, {
    sourcemaps:true                    
  })
  .pipe(sourcemaps.init())
  .pipe(ts({
    noImplicitAny: true,
    outFile: 'main.min.js'
  }))
  .pipe(babel({
    presets: ['@babel/env']
}))
  .pipe(uglify())
  .pipe(concat('main.min.js'))
  .pipe(sourcemaps.write('.'))
  .pipe(size({
    showFiles:true
  }))
 
  .pipe(gulp.dest(paths.scripts.dest))
  .pipe(browserSync.stream())
}

//watcher changes
function watch(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
  gulp.watch(paths.html.dest).on('change', browserSync.reload) 
  gulp.watch(paths.html.src, html)
  gulp.watch(paths.styles.src, styles)
  gulp.watch(paths.scripts.src, scripts)
  gulp.watch(paths.images.src, img)
}
//builder
const build = gulp.series(clean, gulp.parallel(html,styles,scripts, img), watch) //añadir o cambiar pug 

exports.clean = clean
exports.img = img
exports.html = html
exports.pug = pug
exports.styles = styles
exports.watch = watch
exports.scripts = scripts
exports.build = build
exports.default = build