import { NavLink } from "react-router-dom";

const navLinkStyle = {
  textDecoration: "none",
  color: "white",
};

const AppNav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="/" style={navLinkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/project" style={navLinkStyle}>
            Project
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" style={navLinkStyle}>
            Service
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" style={navLinkStyle}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={navLinkStyle}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={navLinkStyle}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AppNav;
