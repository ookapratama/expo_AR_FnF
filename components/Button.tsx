import React from "react";
import type { ButtonProps } from "tamagui";

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Button backgroundColor="$primary" color="$white" size="$5" {...props}>
      {children}
    </Button>
  );
};
