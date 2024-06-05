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
      <div className="bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-12 pr-md-0">
              <nav className="navbar navbar-expand-md btco-hover-menu px-3 py-lg-1">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                  <img src={BCDLogo} alt="" style={{ width: "90px", height: "90px" }} />
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
                  className={`collapse navbar-collapse ${isNavbarCollapsed ? "" : "show"
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

                    <div className="dropdown">
                      <div className="dropdown-toggle nav-link" id="dropdownMenuButton"
                        data-mdb-toggle="dropdown" aria-expanded="false">
                        Services
                      </div>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                          <a className="dropdown-item" href="#/">
                            Consulting Services <i class="fas fa-caret-down" style={{ fontSize: "13px" }}></i>
                          </a>
                          <ul className="dropdown-menu dropdown-submenu">
                            <li>
                              <Link
                                style={{ backgroundColor: "white" }}
                                className={`dropdown-item ${activeLink(
                                  "/bussiness-soloution"
                                )}`}
                                to="/bussiness-soloution"
                                onClick={closeNavbar}
                              >
                                Bussiness Consultancy{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={{ backgroundColor: "white" }}
                                className={`dropdown-item ${activeLink(
                                  "/talent-soloution"
                                )}`}
                                to="/talent-soloution"
                                onClick={closeNavbar}
                              >
                                HR Consultancy
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={{ backgroundColor: "white" }}
                                className={`dropdown-item ${activeLink(
                                  "/digital-soloution"
                                )}`}
                                to="/digital-soloution"
                                onClick={closeNavbar}
                              >
                                Digital Consultancy
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#/">
                            HR Solutions <i class="fas fa-caret-down" style={{ fontSize: "13px" }}></i>
                          </a>
                          <ul className="dropdown-menu dropdown-submenu">
                            <li>
                              <Link
                                style={{ backgroundColor: "white" }}
                                className={`dropdown-item ${activeLink(
                                  "/organization-design"
                                )}`}
                                to="/organization-design"
                                onClick={closeNavbar}
                              >
                                Organization Design{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={{ backgroundColor: "white" }}
                                className={`dropdown-item ${activeLink(
                                  "/HR-policy"
                                )}`}
                                to="/HR-policy"
                                onClick={closeNavbar}
                              >
                                HR Analysis Policy
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={{ backgroundColor: "white" }}
                                className={`dropdown-item ${activeLink(
                                  "/recruitment-&-selection"
                                )}`}
                                to="/recruitment-&-selection"
                                onClick={closeNavbar}
                              >
                                Recruitment & Selection
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={{ backgroundColor: "white" }}
                                className={`dropdown-item ${activeLink(
                                  "/recruitment-services"
                                )}`}
                                to="/recruitment-services"
                                onClick={closeNavbar}
                              >
                                Recruitment Solution
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#/">
                            Training <i class="fas fa-caret-down" style={{ fontSize: "13px" }}></i>
                          </a>
                          <ul className="dropdown-menu dropdown-submenu">
                            <li>
                              <Link
                                style={{ backgroundColor: "white" }}
                                className={`dropdown-item ${activeLink(
                                  "/employees-training"
                                )}`}
                                to="/employees-training"
                                onClick={closeNavbar}
                              >
                                Training Solution{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={{ backgroundColor: "white" }}
                                className={`dropdown-item ${activeLink(
                                  "/specialized-training"
                                )}`}
                                to="/specialized-training"
                                onClick={closeNavbar}
                              >
                                Specialized Training Manuals
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#/">
                            Diagnosis <i class="fas fa-caret-down" style={{ fontSize: "13px" }}></i>
                          </a>
                          <ul className="dropdown-menu dropdown-submenu">
                            <li>
                              <Link
                                style={{ backgroundColor: "white" }}
                                className={`dropdown-item ${activeLink(
                                  "/organizational-diagnosis"
                                )}`}
                                to="/organizational-diagnosis"
                                onClick={closeNavbar}
                              >
                                Organizational Diagnosis{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={{ backgroundColor: "white" }}
                                className={`dropdown-item ${activeLink(
                                  "/behavioural-diagnosis"
                                )}`}
                                to="/behavioural-diagnosis"
                                onClick={closeNavbar}
                              >
                                Behavioural Diagnosis
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={{ backgroundColor: "white" }}
                                className={`dropdown-item ${activeLink(
                                  "/employee-management"
                                )}`}
                                to="/employee-management"
                                onClick={closeNavbar}
                              >
                                Employee Engagement
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link className={`dropdown-item nav-link nav-digital ${activeLink("/our-digital-products")}`} to="/our-digital-products" onClick={closeNavbar}>
                            Digital Solutions
                          </Link>
                        </li>
                      </ul>
                    </div>
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
