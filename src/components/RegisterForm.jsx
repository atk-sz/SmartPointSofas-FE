import React, { useState } from "react";
import "./css/RegisterForm.css";

const RegisterForm = ({ handleRegister }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPhone, setShowPhone] = useState(false);

  const checkAndShowPhone = (e) => {
    var pattern = new RegExp("^[0-9]{10}$");
    if (pattern.test(e.target.value)) setShowPhone(false);
    else setShowPhone(true);
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({ name, phone });
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="register_name" className="form-label">
          Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          type="text"
          className="form-control"
          id="register_name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="register_phone" className="form-label">
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
          id="register_phone"
        />
        {showPhone && (
          <div id="emailHelp" className="form-text">
            Enter a 10 digit number only.
          </div>
        )}
      </div>
      <button
        id="register_submit"
        type="submit"
        className="btn btn-primary"
        disabled={showPhone}
      >
        Add User
      </button>
    </form>
  );
};

export default RegisterForm;
