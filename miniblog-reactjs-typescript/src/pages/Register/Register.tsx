import React from "react";
import { useState } from "react";
type Props = {};

const Register = (props: Props) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  return <div>Register</div>;
};

export default Register;
