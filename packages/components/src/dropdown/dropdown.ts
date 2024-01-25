export type DropdownItem = {
  key?: string | number;
  label?: string | number;
  value?: string | number;
};

export interface DropdownProps {
  data?: DropdownItem[];
  trigger?: 'hover' | 'click';
}
