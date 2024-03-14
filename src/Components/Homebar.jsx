import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Homebar({ onNavbarToggle }) {
const [isNavbarExpand,setIsNavbarExpand] = useState(true)

  const location = useLocation();
  const activeLink = (path) => {
    return path === location.pathname ? "active" : "";
  };

  const handleNavbarToggle = ()=>{
    setIsNavbarExpand(!isNavbarExpand)
    onNavbarToggle(!isNavbarExpand)
  }

  return (
    <div className="container-fluid">
      {/* {/ !-- Start Fables Navigation --> /} */}
      
      <nav className="navbar Home-navbar">
        <button className="navbar-toggler" onClick={handleNavbarToggle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" style={{ border: "1px solid white", color: "white" }}>
          <span className="navbar-toggler-icon" style={{ filter: "brightness(0) invert(1)", color: "white" }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
          <ul className="navbar-nav Home-nav fables-nav" >
            <li>
              <Link
                className={`nav-link home-nav ${activeLink("/")}`}
                to="/"
                
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link home-nav ${activeLink("/about")}`}
                to="/about"
                
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <Link
                  to="/#"
                  className="nav-link home-nav dropdown-toggle"
                  style={{ fontSize: "17px" }}
                  data-bs-toggle="dropdown"
                >
                  Solutions
                </Link>
                <div className="dropdown-menu Home-DropMenu rounded mr-2" style={{backgroundColor:"transparent"}}>
                  <li></li>
                  <Link
                    className={`dropdown-item home-dropdown ${activeLink("/bussiness-soloution")}`}
                    to="/bussiness-soloution"
                    
                  >
                    Bussiness Development
                  </Link>
                  <Link
                    className={`dropdown-item home-dropdown ${activeLink("/talent-soloution")}`}
                    to="/talent-soloution"
                    
                  >
                    Talent Solution
                  </Link>
                  <Link
                    className={`dropdown-item home-dropdown ${activeLink("/digital-soloution")}`}
                    to="/digital-soloution"
                    
                  >
                    Digital Transformation
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link
                className={`nav-link home-nav ${activeLink("/learning-cafe")}`}
                to="/learning-cafe"
                
              >
                Learning Cafe
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link home-nav ${activeLink("/news-&-events")}`}
                to="/news-&-events"
                
              >
                News & Events
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link home-nav ${activeLink("/csr-policy")}`}
                to="/csr-policy"
                
              >
                CSR
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link home-nav ${activeLink("/contact")}`}
                to="/contact"
                
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link home-nav ${activeLink("/join")}`}
                to="/join"
                
              >
                Join
              </Link>
            </li>
          </ul>
        </div>
      </nav>


    </div>
  );
}
