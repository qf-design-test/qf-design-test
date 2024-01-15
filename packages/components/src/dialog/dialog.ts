export interface DialogProps {
  visible?: boolean;
  title?: string;
  onOk?: () => void;
  onClose?: () => void;
}
