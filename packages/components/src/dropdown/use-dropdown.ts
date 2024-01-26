import { ref, computed, Ref, watch, nextTick } from 'vue';
import { DropdownItem, DropdownProps } from './dropdown';
import { useZIndex } from '../../utils';

// 创建一个名为useDropdown的自定义hook
export const useDropdown = (
  props: DropdownProps, // 下拉菜单组件的props
  anchor: Ref<HTMLElement>, // 锚点元素的引用
  menuRef: Ref<HTMLElement>, // 菜单元素的引用
  emit: (event: 'select', ...args: any[]) => void // 用于触发事件的函数
) => {
  const visible = ref(false); // 控制下拉菜单的显示状态
  const style = ref({}); // 下拉菜单的样式

  // 计算下拉菜单的样式
  const computeStyle = () => {
    if (!anchor.value && !visible.value) return {};
    const { bottom, left, width } = anchor.value.getBoundingClientRect();
    const { width: menuWidth } = menuRef.value.getBoundingClientRect();
    style.value = {
      zIndex: useZIndex(),
      top: `${bottom + 6}px`,
      left: `${left + width / 2 - menuWidth / 2}px`
    };
  };

  // 监听下拉菜单显示状态的变化，并在下一个事件循环中计算样式
  watch(visible, () => {
    nextTick(computeStyle);
  });

  // 切换下拉菜单的显示状态
  const toggle = () => {
    visible.value = !visible.value;
  };

  // 鼠标进入事件处理函数
  const onMouseEnter = () => {
    if (props.trigger === 'hover' && !visible.value) {
      visible.value = true;
    }
  };

  // 鼠标离开事件处理函数
  const onMouseLeave = () => {
    if (props.trigger === 'hover' && visible.value) {
      visible.value = false;
    }
  };

  // 点击事件处理函数
  const clickHandler = () => {
    if (props.trigger === 'click') {
      toggle();
    }
  };

  // 下拉菜单选项点击事件处理函数
  const itemClick = (item: DropdownItem) => {
    if (item.disabled) return;

    emit('select', item.value); // 触发select事件
    if (props.hideOnClick) {
      toggle(); // 如果设置了hideOnClick属性，点击后隐藏下拉菜单
    }
  };

  // 计算属性，返回下拉菜单的数据
  const menus = computed(() => props.data);

  // 返回需要在模板中使用的数据和方法
  return {
    visible, // 下拉菜单的显示状态
    onMouseEnter, // 鼠标进入事件处理函数
    onMouseLeave, // 鼠标离开事件处理函数
    clickHandler, // 点击事件处理函数
    menus, // 下拉菜单的数据
    style, // 下拉菜单的样式
    itemClick // 下拉菜单选项点击事件处理函数
  };
};
