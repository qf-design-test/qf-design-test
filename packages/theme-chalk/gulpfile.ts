import { series, src, dest } from 'gulp';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import cssmin from 'gulp-cssmin';

function compile() {
  return src('./src/*.less')
    .pipe(less())
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(cssmin())
    .pipe(dest('./dist'));
}

export const build: ReturnType<typeof series> = series(compile);
