import { withInstall } from './../../utils';
import _Collapse from './collapse.vue';
import _CollapseItem from './collapse-item.vue';

export const Collapse = withInstall(_Collapse, {
  CollapseItem: _CollapseItem
});

export default Collapse;
