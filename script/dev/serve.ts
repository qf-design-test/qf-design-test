import { series, watch } from 'gulp';
import path from 'path';
import {
  buildComponent,
  buildStyle,
  copyFullStyle
} from '../build/build-components';
import run from '../utils/run';

const rootDir = path.join(__dirname, '../../');

export default () => {
  console.log('开启文件Watch');
  watch(
    ['packages/components/**/*.(ts|vue)'],
    { cwd: rootDir },
    buildComponent
  );

  watch(
    ['packages/theme-chalk/src/*.less'],
    { cwd: rootDir },
    series(buildStyle, copyFullStyle)
  );

  console.log('运行文档服务');
  run('pnpm run dev:docs');
};
