/** @format */

import { Button } from "../ui/button";
import type { IAuthButtonProps } from "@/base/interface/button/button.interface";
import { cn } from "@/lib/utils";

const AuthButton = ({
  className,
  disableclassName,
  showDisableRegisterBtn,
  placeholder,
  onClick,
}: IAuthButtonProps) => {
  return (
    <>
      {showDisableRegisterBtn ? (
        <Button className={cn(disableclassName)}>{placeholder} </Button>
      ) : (
        <Button onClick={onClick} className={cn(className)}>
          {placeholder}
        </Button>
      )}
    </>
  );
};

export default AuthButton;
