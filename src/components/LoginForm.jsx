import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/LoginForm.css";

const LoginForm = ({ handleLogin }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPhone, setShowPhone] = useState(false);

  const checkAndShowPhone = (e) => {
    var pattern = new RegExp("^[0-9]{10}$");
    if (pattern.test(e.target.value)) setShowPhone(false);
    else setShowPhone(true);
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ phone, password });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="login_phone" className="form-label">
          Phone
        </label>
        <input
          onFocus={checkAndShowPhone}
          onBlur={checkAndShowPhone}
          onChange={checkAndShowPhone}
          value={phone}
          name="phone"
          type="number"
          className="form-control"
          id="login_phone"
        />
        {showPhone && (
          <div id="emailHelp" className="form-text">
            Enter a 10 digit number only.
          </div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="InputPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          id="InputPassword"
        />
      </div>
      <button
        id="login_submit"
        type="submit"
        className="btn btn-primary"
        disabled={showPhone}
      >
        Login
      </button>
      <Link className="float-end" to="/register">Add User</Link>
    </form>
  );
};

export default LoginForm;
