import React from "react";
import { StyledForm } from "./style";

type Props = {
  children: React.ReactNode;
};

const Form = ({ children }: Props) => {
  return <StyledForm>{children}</StyledForm>;
};

export default Form;
