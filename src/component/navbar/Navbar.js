import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navitems">
        {" "}
        <div>Logo</div>
        <div>
          <ul>
            <li>SignUp</li>
            <li>Login</li>
            <li>Men's</li>
            <li>Women's</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
