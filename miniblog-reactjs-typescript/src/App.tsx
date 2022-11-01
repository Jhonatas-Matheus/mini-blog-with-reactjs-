import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import Button from "./components/Button/Button";
import { StyledButton } from "./components/Button/style";
import { StyledContainer } from "./components/Container/style";
import Form from "./components/Form/Form";
import Input from "./components/Input/Input";
import { UserContext, UserProvider } from "./context/UserContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useContext, useEffect, useState } from "react";
import { User } from "firebase/auth";
function App() {
  const { user, setTrigger, trigger } = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState<User | undefined | null>();
  useEffect(() => {
    setCurrentUser(user);
  }, []);
  console.log(user);
  return (
    <div className="App">
      <StyledContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </StyledContainer>
    </div>
  );
}

export default App;
