/** @format */

import type React from "react";

export default interface IButtonProps {
  placeholder: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  showDisableButton?: boolean;
  disableClassName?: string;
}

export interface IAuthButtonProps {
  placeholder: string | React.ReactNode;
  className?: string;
  onClick?: () => void;
  showDisableRegisterBtn?: boolean;
  disableclassName?: string;
}
