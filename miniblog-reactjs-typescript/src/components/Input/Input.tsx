import React from "react";
import { StyledInput } from "./style";

type Props = {
  children?: React.ReactNode;
  title: string;
  placeholder: string;
};

const Input = ({ children, title, placeholder }: Props) => {
  return (
    <StyledInput>
      <span>{title}</span>
      <input type="text" placeholder={placeholder} />
    </StyledInput>
  );
};

export default Input;
