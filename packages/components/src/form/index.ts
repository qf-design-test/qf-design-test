import { withInstall } from './../../utils';
import _Form from './form.vue';
import _FormItem from './form-item.vue';

export const Form = withInstall(_Form, {
  FormItem: _FormItem
});

export default Form;
