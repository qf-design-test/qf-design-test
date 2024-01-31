export const CollapseContext = 'CollapseContext';

export interface CollapseProps {
  modelValue?: string | string[];
  accordion?: boolean;
}

export interface CollapseItemProps {
  name?: string;
  title?: string;
}
