import React from "react";
import Button from "./components/Button/Button";
import { StyledButton } from "./components/Button/style";
import { StyledContainer } from "./components/Container/style";
import Form from "./components/Form/Form";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <StyledContainer>
        <h1>Testando</h1>
        <Button mode="main">Main</Button>
        <Button mode="dark">Dark</Button>
        <Button mode="outline">OutLine</Button>
        <Form>
          <Input title="Name" placeholder="Aqui você escreve alguma coisa." />
          <Input title="Idade" placeholder="Aqui você escreve alguma coisa." />
          <Input title="Cidade" placeholder="Aqui você escreve alguma coisa." />
        </Form>
      </StyledContainer>
    </div>
  );
}

export default App;
