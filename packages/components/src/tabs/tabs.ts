export interface Tab {
  /** 标题 */
  label: string;
  /** 值 */
  value: string;
}

export interface TabProps {
  // tab数据数组
  data: Tab[];
  // 当前激活的tab key
  activeKey?: string;
  // tab的宽度
  width: number;
}
