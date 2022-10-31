import React from "react";
import { iStyledButtonProp, StyledButton } from "./style";

type Props = {
  children: React.ReactNode;
  mode: "main" | "dark" | "outline";
  type: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button = ({ children, type, mode, disabled }: Props) => {
  return (
    <StyledButton
      mode={mode}
      type={type}
      disabled={disabled ? disabled : false}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
