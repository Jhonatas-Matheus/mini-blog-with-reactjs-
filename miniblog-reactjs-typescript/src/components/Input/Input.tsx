import React from "react";
import { StyledInput } from "./style";

type Props = {
  children?: React.ReactNode;
  title: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  onChange?: () => void;
  value?: string;
};

const Input = ({
  children,
  title,
  placeholder,
  type,
  required,
  onChange,
  value,
}: Props) => {
  return (
    <StyledInput>
      <span>{title}</span>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
      />
    </StyledInput>
  );
};

export default Input;
