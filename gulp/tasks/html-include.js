import browserSync from 'browser-sync';
import fileInclude from "gulp-pug";
import typograf from "gulp-typograf";

export const htmlInclude = () => {
  return app.gulp.src([`${app.paths.base.src}/*.pug`])
    .pipe(fileInclude({
      pretty: true
    }))
    .pipe(typograf({
      locale: ['ru', 'en-US']
    }))
    .pipe(app.gulp.dest(app.paths.base.build))
    .pipe(browserSync.stream());
}
