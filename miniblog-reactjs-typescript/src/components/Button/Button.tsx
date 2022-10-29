import React from "react";
import { iStyledButtonProp, StyledButton } from "./style";

type Props = {
  children: React.ReactNode;
  mode: "main" | "dark" | "outline";
};

const Button = ({ children, mode }: Props) => {
  return <StyledButton mode={mode}>{children}</StyledButton>;
};

export default Button;
