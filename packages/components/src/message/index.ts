// 一个存储所有实例的数组，用于多个消息实例时计算下一个的偏移量

// 一个message.vue
// 点击icon 关闭
// 需要支持传入自定义vnode
// 动画上下+透明度
// 销毁后，移除dom


// 一个方法函数
// 转化外部传入选项， appendTo
// 利用vue函数渲染message组件，插入到指定的appendTo元素
// 返回当前message实例，用户可调用close方法

import { withInstallFunction } from '../../utils';
import QFMessage from './service';

export const Message = withInstallFunction(QFMessage, '$message');
export default Message;
