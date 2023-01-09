import React from "react";
import { loginAPI } from "../apis/auth";
import { Header, LoginForm } from "../components";
import "./css/Login.css";

const Login = () => {
  const handleLogin = (loginValues) => {
    loginAPI(loginValues)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("err");
        console.log(err.message);
      });
  };

  return (
    <div className="login-page">
      <Header />
      <h1>Login</h1>
      <div className="login-form-div">
        <LoginForm handleLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
