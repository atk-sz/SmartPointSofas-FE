import React from "react";
import { registerAPI } from "../apis/auth";
import { Header, RegisterForm } from "../components";
import "./css/Register.css";

const Register = () => {
  const handleRegister = (values) => {
    registerAPI(values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("err");
        console.log(err);
      });
  };
  return (
    <div className="register-page">
      <Header />
      <h1>register</h1>
      <div className="register-form-div">
        <RegisterForm handleRegister={handleRegister} />
      </div>
    </div>
  );
};

export default Register;
