export type DropdownItem = {
  key: string | number;
  label: string | number;
  value?: string | number;
  disabled?: boolean;
};

export interface DropdownProps {
  data?: DropdownItem[];
  trigger?: 'hover' | 'click';
  hideOnClick?: boolean;
}
