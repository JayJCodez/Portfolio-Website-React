import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/BootstrapNav.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import myLogo from "../assets/Jays Development & Design.png";
import menuicon from "../assets/Project/icons/icons8-menu-96.png";

export const BootstrapNav = () => {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleProjectClick = () => {
    navigate("/projects");
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: " rgb(59, 30, 139, 0.5)" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img src={myLogo} alt="" width="30" height="24" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <img src={menuicon} className="menuicon" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex items">
            <li className="nav-item navlink ">
              <Link className="nav-link active" aria-current="page" to="/">
                <h5 className="text-white">Home</h5>
              </Link>
            </li>
            <li className="nav-item navlink">
              <Link className="nav-link" to="/about">
                <h5 className="text-white">About</h5>
              </Link>
            </li>
            <li
              className="nav-item dropdown navlink"
              onMouseEnter={handleDropdown}
              onMouseLeave={handleDropdown}
            >
              <div
                className={`nav-link dropdown-toggle ${
                  dropdown ? "show" : ""
                } text-white`}
                role="button"
                style={{ fontFamily: "Montserrat", fontSize: "20px" }}
                aria-expanded={dropdown}
                onClick={handleProjectClick}
              >
                Projects
              </div>
              <i className="fas fa-caret-down" />
              {dropdown && (
                <div className="dropdown-menu dropdown-menu-dark show">
                  <Link className="dropdown-item" to="#">
                    Web Development
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Mobile Development
                  </Link>
                  <Link className="dropdown-item" to="#">
                    API Development
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Database Management
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Real-Time Applications
                  </Link>
                  <Link className="dropdown-item" to="#">
                    DevOps
                  </Link>
                  <hr className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </div>
              )}
            </li>
            <li className="nav-item navlink">
              <Link className="nav-link" aria-disabled="true" to="/contact">
                <h5 className="text-white">Contact</h5>
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                borderColor: " rgb(59, 30, 139, 0.5)",
                background: "rgb(0,0,0,0.5)",
                color: "white",
              }}
            />
            <button className="search" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default BootstrapNav;
