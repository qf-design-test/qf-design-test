import { createVNode, render } from 'vue';
import MessageComponent from './message.vue';
import { MessageOptions, instances } from './message';

// 用于生成唯一的消息ID
let messageId = 1;

const types = ['success', 'warning', 'info', 'error'];

// 导出的消息组件函数
const QFMessage = (options: MessageOptions = {}) => {
  // 从参数中解构出需要的属性
  const { appendTo, delay, message = '', type, showClose } = options;

  // 创建一个新的div容器
  const container = document.createElement('div');

  // 使用id方便后续使用
  const currentMsgId = `message-${messageId++}`;

  // 创建vnode
  let vnode = createVNode(
    MessageComponent, // 使用Message组件
    {
      id: currentMsgId, // 当前消息的ID
      delay, // 延迟时间
      appendTo, // 添加到的位置
      type,
      showClose,
      onClose() {
        // 关闭时需要清除掉当前实例
        const idx = instances.findIndex((item) => item.id === currentMsgId);
        if (idx !== -1) {
          instances.splice(idx, 1); // 从实例数组中移除当前实例
        }
      },
      onDestroy() {
        vnode = null; // 清空vnode
        render(null, container); // 清空容器
      }
    },
    {
      default: typeof message === 'function' ? message : () => message // 默认插槽内容为message
    }
  );

  render(vnode, container); // 渲染vnode到容器
  document.body.appendChild(container.firstChild); // 将容器的第一个子元素添加到body中

  const vm = vnode.component!; // 获取vnode对应的组件实例

  // 创建当前消息实例对象
  const instance = {
    id: currentMsgId, // 当前消息的ID
    vnode, // 当前消息的vnode
    vm, // 当前消息的组件实例
    close() {
      return (vm.exposed.selfVisible.value = false); // 关闭消息的方法
    }
  };

  instances.push(instance); // 将当前消息实例添加到实例数组中

  return instance; // 返回当前消息实例
};

types.forEach((type) => {
  QFMessage[type] = (options: MessageOptions) => {
    options.type = type;
    return QFMessage(options);
  };
});

export default QFMessage;
