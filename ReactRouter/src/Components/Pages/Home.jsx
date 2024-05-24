import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <center>
      <div>
        <h1>HOMEPAGE</h1>
        <h6>Welcome {userName.name}</h6>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </center>
  );
};

export default Home;
