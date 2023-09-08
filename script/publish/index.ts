import run from '../utils/run';
import { pkgPath } from '../utils/paths';
import { series } from 'gulp';

export const publishComponents = async () => {
  run('release-it', `${pkgPath}/qf-design/`);
};

export default series(publishComponents);
