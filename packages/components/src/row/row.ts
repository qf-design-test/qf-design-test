export const rowContextKey = 'rowContext';

export interface RowProps {
  gutter?: number;
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  align?: 'top' | 'middle' | 'bottom';
}
