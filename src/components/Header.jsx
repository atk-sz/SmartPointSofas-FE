import { Link } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">
        <Link to="/">Logo</Link>
      </h1>
      <div className="search-form">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="login_here">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
