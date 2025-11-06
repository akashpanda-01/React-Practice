import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      Dashboard Page
      <button onClick={handleClick}>To Home Page</button>
    </div>
  );
}

export default Dashboard;
