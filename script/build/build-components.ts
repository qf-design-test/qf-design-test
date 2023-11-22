import delPath from '../utils/delpath';
import { series } from 'gulp';
import { componentPath, pkgPath, themePath } from '../utils/paths';
// import less from 'gulp-less';
// import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';
import { copyFile, mkdir } from 'fs/promises';
import path from 'path';

// 删除旧包
export const removeDist = () => {
  return delPath(`${pkgPath}/qf-design`);
};

// 打包样式
export const buildStyle = async () => {
  // return src(`${componentPath}/src/**/style/**.less`)
  //   .pipe(less())
  //   .pipe(autoprefixer())
  //   .pipe(dest(`${pkgPath}/qf-design/lib/src`))
  //   .pipe(dest(`${pkgPath}/qf-design/es/src`));

  run('pnpm run build', themePath);
};

export const copyFullStyle = async () => {
  await mkdir(path.resolve(pkgPath, 'dist'), { recursive: true });
  await copyFile(
    path.resolve(pkgPath, 'theme-chalk/dist/index.css'),
    path.resolve(pkgPath, 'qf-design/index.css')
  );
};

/**打包组件 */
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

export default series(removeDist, buildComponent, buildStyle, copyFullStyle);
