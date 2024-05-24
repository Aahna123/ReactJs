import React, { useState } from "react";
import "./Login.css"; // Import the CSS for styling
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("Wrong Email or Password");
    }
  };

  return (
    <center>
      <form onSubmit={handleLogin}>
        <div className="bg">
          <p>Email ID</p>
          <input
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="text"
          ></input>
          <p>Password</p>
          <input
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="text"
          ></input>
          <br />
          <br />
          <button>Login</button>
          <p>Forgot password</p>
          <p>
            Dont have an account?<Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </center>
  );
}

export default Login;
