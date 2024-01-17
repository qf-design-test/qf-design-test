export const rowContextKey = 'rowContext';

export interface RowProps {
  // 列间隔
  gutter?: number;
  // 列-水平居中
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  // 列 垂直居中
  align?: 'top' | 'middle' | 'bottom';
}
