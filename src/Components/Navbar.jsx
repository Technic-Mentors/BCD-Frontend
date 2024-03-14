import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BCDLogo from "../img/BCD Logo.png"

export default function Navbar() {
  const [isNavbarCollapsed, setIsNavbarCollpased] = useState(true);
  const location = useLocation();

  const handleNavbarToggle = () => {
    setIsNavbarCollpased(!isNavbarCollapsed);
  };
  const closeNavbar = () => {
    if (window.innerWidth <= 768) {
      setIsNavbarCollpased(true);
    }
  };

  const activeLink = (path) => {
    return path === location.pathname ? "active" : "";
  };

  if (
    location.pathname === "/adminpanel/Addnews" ||
    location.pathname === "/adminpanel/addnews" ||
    location.pathname === "/adminpanel/allnews" ||
    location.pathname === "/"
  ) {
    return null;
  }
  return (
    <div>
      {/* !-- Start Fables Navigation --> */}
      <div className="bg-light px-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-12 pr-md-0">
              <nav className="navbar navbar-expand-md btco-hover-menu py-lg-1">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                  <img src={BCDLogo} alt="" style={{width:"90px",height:"90px"}}/>
                  <h5 className="px-1">BCD Services</h5>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  onClick={handleNavbarToggle}
                  aria-expanded={!isNavbarCollapsed}
                  aria-label="Toggle navigation"
                >
                  <span className="fables-iconmenu-icon text-dark font-16"></span>
                </button>
                <div
                  className={`collapse navbar-collapse ${
                    isNavbarCollapsed ? "" : "show"
                  } justify-content-end`}
                  id="fablesNavDropdown"
                >
                  <ul className="navbar-nav fables-nav">
                    <li>
                      <Link
                        className={`nav-link ${activeLink("/")}`}
                        to="/"
                        onClick={closeNavbar}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link ${activeLink("/about")}`}
                        to="/about"
                        onClick={closeNavbar}
                      >
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="nav-link dropdown-toggle text-dark"
                          style={{ fontSize: "17px" }}
                          data-bs-toggle="dropdown"
                        >
                          Solutions
                        </Link>
                        <div className="dropdown-menu rounded mr-2">
                          <Link
                            style={{ backgroundColor: "white" }}
                            className={`dropdown-item ${activeLink(
                              "/bussiness-soloution"
                            )}`}
                            to="/bussiness-soloution"
                            onClick={closeNavbar}
                          >
                            Bussiness Development{" "}
                          </Link>
                          <Link
                            style={{ backgroundColor: "white" }}
                            className={`dropdown-item ${activeLink(
                              "/talent-soloution"
                            )}`}
                            to="/talent-soloution"
                            onClick={closeNavbar}
                          >
                            Talent Solution
                          </Link>
                          <Link
                            style={{ backgroundColor: "white" }}
                            className={`dropdown-item ${activeLink(
                              "/digital-soloution"
                            )}`}
                            to="/digital-soloution"
                            onClick={closeNavbar}
                          >
                            Digital Transformation
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link
                        className={`nav-link ${activeLink("/learning-cafe")}`}
                        to="/learning-cafe"
                        onClick={closeNavbar}
                      >
                        Learning Cafe
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link ${activeLink("/news-&-events")}`}
                        to="/news-&-events"
                        onClick={closeNavbar}
                      >
                        News & Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link ${activeLink("/csr-policy")}`}
                        to="/csr-policy"
                        onClick={closeNavbar}
                      >
                        CSR
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link ${activeLink("/contact")}`}
                        to="/contact"
                        onClick={closeNavbar}
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link ${activeLink("/join")}`}
                        to="/join"
                        onClick={closeNavbar}
                      >
                        Join
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
