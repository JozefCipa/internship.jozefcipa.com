var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var notify = require('gulp-notify');
var cleanCSS = require('gulp-clean-css');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');

//SASS
gulp.task('build:sass', () => {
        sass('sass/*.sass')
        	.on('error', sass.logError)
	        .pipe(cleanCSS())
	        .pipe(autoprefixer({
	            cascade: false
	        }))
			.pipe(notify({
				message: "SASS compiled."
			}))
	        .pipe(gulp.dest('public/assets/css'))
	        .pipe(livereload());                                   
});

gulp.task('watch:sass', () => {
	livereload.listen();

	gulp.watch('./sass/*.sass', ['build:sass']);
});