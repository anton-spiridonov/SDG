export enum EButtonStyle {
  PRIMARY = "primary",
  DISABLED = "disabled",
  ERROR = "error",
}

export interface IButtonProps {
  style?: EButtonStyle;
  name: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
