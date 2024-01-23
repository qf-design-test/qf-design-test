export interface TransferItem {
  key: string | number;
  label: string;
  disabled?: boolean;
}

export interface TransferProps {
  modelValue?: TransferItem[];
  data?: TransferItem[];
  titles?: [string, string];
  actionTexts?: [string, string];
  filterable?: boolean;
}
