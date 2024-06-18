import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/apple.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          <div className="container ImageHeading">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top logo"
            />
            J D D
          </div>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link className="nav-links" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-links" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-links" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-links" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <div
              className="nav-links dropdown"
              onMouseEnter={handleDropdown}
              onMouseLeave={handleDropdown}
            >
              More
              <i className="fas fa-caret-down" />
              {dropdown && (
                <div className="dropdown-content">
                  <Link className="dropdown-link" to="/service1">
                    Service 1
                  </Link>
                  <Link className="dropdown-link" to="/service2">
                    Service 2
                  </Link>
                  <Link className="dropdown-link" to="/service3">
                    Service 3
                  </Link>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
