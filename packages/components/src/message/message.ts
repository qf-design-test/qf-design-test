import { VNode, shallowReactive, ComponentInternalInstance } from 'vue';

// 定义消息组件的属性
export interface MessageProps {
  delay?: number; // 延迟时间
  offset?: number; // 偏移量
  id?: string; // 消息ID
  appendTo?: string | HTMLElement; // 添加到的位置
  type?: 'success' | 'warning' | 'error' | 'info'; // 消息类型
  showClose?: boolean; // 是否显示关闭按钮
}

// 定义消息组件的选项
export interface MessageOptions {
  appendTo?: string | HTMLElement; // 添加到的位置
  message?: string | VNode; // 消息内容
  type?: 'success' | 'warning' | 'error' | 'info'; // 消息类型
  showClose?: boolean; // 是否显示关闭按钮
  delay?: number; // 延迟时间
}

// 定义消息上下文类型
export type MessageContext = {
  id: string; // 消息ID
  vnode: VNode; // 消息的VNode属性
  vm: ComponentInternalInstance; // 消息的组件实例
  close: () => void; // 关闭消息的方法
};

// 使用shallowReactive创建响应式的消息实例数组
export const instances: MessageContext[] = shallowReactive([]);

// 根据消息ID获取消息实例
export const getInstance = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  const current = instances[idx]; // 当前消息实例
  let prev: MessageContext | undefined;
  if (idx > 0) {
    prev = instances[idx - 1]; // 前一个消息实例
  }
  return { current, prev };
};

// 获取上一个消息的偏移量
export const getLastOffset = (id: string): number => {
  const { prev } = getInstance(id);
  if (!prev) return 0;
  return prev.vm.exposed!.bottom.value; // 返回上一个消息的底部值
};
