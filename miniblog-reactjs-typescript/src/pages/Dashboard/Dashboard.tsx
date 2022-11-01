import React from "react";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { StyledDashboardContainer } from "./style";
import Login from "../Login/Login";
type Props = {};

const Dashboard = (props: Props) => {
  const { user, loading } = useContext(UserContext);

  console.log(loading);
  if (loading) {
    return (
      <StyledDashboardContainer>
        <p>Carregando...</p>
      </StyledDashboardContainer>
    );
  }
  return (
    <>
      {!user && <Navigate to="/login" />}
      {user && (
        <>
          <div>Dashboard</div>
        </>
      )}
    </>
  );
};

export default Dashboard;
