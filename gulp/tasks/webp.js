import webp from 'gulp-webp';

export const webpImages = () => {
  return app.gulp.src([`${app.paths.srcImgFolder}/**/**.{webp,jpg,jpeg,png}`], { encoding: false })
    .pipe(webp({
      quality: 40
    }))
    .pipe(app.gulp.dest(app.paths.buildImgFolder))
};
