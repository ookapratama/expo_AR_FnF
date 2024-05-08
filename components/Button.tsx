import React from "react";
import { Button as Btn } from "tamagui";
import type { ButtonProps as BtnProps } from "tamagui";

export const Button = ({ children, ...props }: BtnProps) => {
  return (
    <Btn
      backgroundColor="$primary"
      color="$white"
      borderRadius="$5"
      size="$5"
      {...props}
    >
      {children}
    </Btn>
  );
};

export type ButtonProps = BtnProps;
