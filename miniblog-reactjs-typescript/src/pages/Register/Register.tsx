import React from "react";
import { useState } from "react";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import { useAuthentication } from "./../../hooks/useAuthentication";
import { StyledContainerRegister } from "./style";
type Props = {};

const Register = (props: Props) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser, error: authError, loading } = useAuthentication();
  return (
    <StyledContainerRegister>
      <h1>Cdastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <Form>
        <Input title="Nome:" />
      </Form>
    </StyledContainerRegister>
  );
};

export default Register;
