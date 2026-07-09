/** @format */

import { Button } from "../ui/button";
import type IButtonProps from "@/base/interface/button/button.interface";
import { cn } from "@/lib/utils";

const ButtonComp = ({
  placeholder,
  className,
  disabled = false,
  onClick,
  type = "button",
}: IButtonProps) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(className)}>
      {placeholder}
    </Button>
  );
};

export default ButtonComp;
