import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Topheader() {
  const location = useLocation()

  if(location.pathname === "/adminpanel/Addnews" || location.pathname === "/adminpanel/addnews" || location.pathname === "/adminpanel/allnews" || location.pathname === "/"){
    return null;
}
  return (
    <div>
<div
        className="container-fluid pe-0 d-none d-lg-block Top-Header"
        style={{backgroundColor:"#2C3E4F"}}
      >
        <div className="row d-flex align-items-center px-4">
          <div className="col-md-8 d-flex mb-2 mb-lg-0">
                <p className="m-0 text-white">
                  <i className="fa fa-envelope-open me-2"></i>
                  info@bcdserve.com
                </p>
          <p className="m-0 text-white mx-2">
                <i className="fa fa-phone mx-1"></i> +92 3000 880 323
                </p>
          </div>
          <div className="col-md-4 py-1">
            <div className="position-relative d-flex topheader-margin align-items-center justify-content-end top-shape py-1">
             
              <a
                href="https://www.facebook.com/McKinsey/"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle "
              >
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a
                href="https://twitter.com/BCDserve"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle "
              >
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a
                href="https://www.youtube.com/bcdserve"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle "
              >
                <i className="fab fa-youtube text-white"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/bcdserve/"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle "
              >
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
              <a
                href="https://www.instagram.com/bcdserve/"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle me-0"
              >
                <i className="fa-brands fa-instagram text-white"></i>
              </a>
              <a
                href="https://wa.me/923000880323"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle me-0"
              >
                <i className="fa-brands fa-whatsapp text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
