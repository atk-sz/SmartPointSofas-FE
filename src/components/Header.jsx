import "./css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">Logo</h1>
      <div className="search-form">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="login_here">Login</div>
    </div>
  );
};

export default Header;
