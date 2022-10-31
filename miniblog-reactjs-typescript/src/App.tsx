import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Button from "./components/Button/Button";
import { StyledButton } from "./components/Button/style";
import { StyledContainer } from "./components/Container/style";
import Form from "./components/Form/Form";
import Input from "./components/Input/Input";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <StyledContainer>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </StyledContainer>
    </div>
  );
}

export default App;
