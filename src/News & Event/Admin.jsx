import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import header from "../img/header.jpg"

export default function Admin() {
  return (
    <div>
        {/* <!-- Start Header --> */}
      <div
        className="fables-header"
        style={{ backgroundImage: `url(${header})` }}
      >
        <div className="fables-after-overl">
          <div className="container">
            <div className="d-flex justify-content-center align-items-center py-7 text-white animate__animated animate__zoomIn">
              <h2 className=" wow fadeInLeft" data-wow-duration="1.5s">
                BCD Serve : Admin Panel
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /End Header --> */}
      <div className="container-fluid py-5">
        <div className="row">
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-10">
                <Outlet/>
            </div>
        </div>
      </div>
    </div>
  )
}
