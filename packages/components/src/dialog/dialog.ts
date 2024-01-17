export interface DialogProps {
  // 是否显示
  visible?: boolean;
  // 对话框标题
  title?: string;
  // 对话框宽度
  width?: number | string;
  // 点击蒙层是否允许关闭
  closeOnClickMask?: boolean;
  // ok触发
  onOk?: () => void;
  // 关闭触发
  onClose?: () => void;
}
