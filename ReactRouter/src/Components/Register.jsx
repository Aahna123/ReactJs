import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <center>
      <form onSubmit={handleSubmit}>
        <div className="bg">
          <p>UserName</p>
          <input
            name="name"
            value={input.name}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="text"
          ></input>
          <p>Email</p>
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
          <button>Submit</button>
          <p>
            Already have an account? <Link to="/Login">Login</Link>
          </p>
        </div>
      </form>
    </center>
  );
};

export default Register;
