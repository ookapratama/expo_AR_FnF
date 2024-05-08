import React from "react";
import type { ButtonProps } from "tamagui";

const Button = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>;
};

export default Button;
