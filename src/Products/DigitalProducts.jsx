import React from 'react'
import CapoBiz from "../img/CapoBiz-LOGO.avif";
import Capobrain from "../img/Capobrain-LOGO.png";
import AirIcon from '@mui/icons-material/Air';

export default function DigitalProducts() {
  return (
    <div style={{overflowX:"hidden"}}>
      {/* <!-- Start Header --> */}
      <div
        className="fables-header"
        style={{ backgroundImage: "url(assets/custom/images/header.jpg)" }}
      >
        <div className="fables-after-overl">
          <div className="container">
            <div className="d-flex justify-content-center align-items-center pt-7 pb-7 animate__animated animate__zoomIn">
              <h2
                className=" wow fadeInLeft text-white"
                data-wow-duration="1.5s"
              >
                Our Digital Products
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /End Header --> */}

      <section className="digital-products mt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 capobiz-product">
              <img
                src={CapoBiz}
                alt="capobiz-pos-software"
                className="img-fluid"
                style={{ height: "60px" }}
              />
              <h3 className="font-25 font-weight-bold mb-3 mt-4">
                Point Of Sale Software
              </h3>

              <p>Step into a new era of business management with our cutting-edge Point of Sale (POS) system. We're not just redefining transactions; we're revolutionizing the way you run your business. Say goodbye to complexity, and welcome streamlined operations and unmatched efficiency. Explore the future of POS solutions with us, where innovation meets seamless functionality, and success becomes your everyday companion.</p>
              <h5>CapoBiz serves as:</h5>
              <div className="pos-list d-flex">
                <ul className="pos-system" style={{ padding: '0', margin: '0', listStyle: 'none', lineHeight: '2' }}>
                  <li><AirIcon className="pos-list-icon" />&nbsp;Point Of Sale System</li>
                  <li><AirIcon className="pos-list-icon" />&nbsp;Restaurant Management System</li>
                  <li><AirIcon className="pos-list-icon" />&nbsp;Trading Management System</li>
                  <li><AirIcon className="pos-list-icon" />&nbsp;Real Estate Management System</li>
                  <li><AirIcon className="pos-list-icon" />&nbsp;Pharmacy Management System</li>
                  <li><AirIcon className="pos-list-icon" />&nbsp;Accounting Software</li>
                  <li><AirIcon className="pos-list-icon" />&nbsp;Manufacturing Management System</li>
                  <li><AirIcon className="pos-list-icon" />&nbsp;Custom Business Solutions</li>
                </ul>
              </div>
              <div className="site-cta mt-4 mb-4">
                <h5 className="fw-bold">Want to have a demo? <a href="https://capobiz.com/" target='blank'>Visit Site</a></h5>
              </div>
            </div>

            <div className="col-md-6 capobrain-product">
              <img
                src={Capobrain}
                alt="capobrain-education-management-system"
                className="img-fluid"
                style={{ height: "50px" }}
              />
              <h3 className="font-25 font-weight-bold mb-3 mt-4">
                School/College Management System
              </h3>
              <p>CapoBrain is a versatile Educational Institute Management System that simplifies administrative tasks and facilitates communication between educators, staff, and parents in educational institutions. Its intuitive interface and robust capabilities make managing student information, scheduling classes, and tracking attendance straightforward. This academic software also includes features for educators to create and assign tasks and for parents to stay updated on their child's progress.</p>
              <h5>Capobrain serves as:</h5>
              <div className="pos-list d-flex">
                <ul className="pos-system" style={{ padding: '0', margin: '0', listStyle: 'none', lineHeight: '2' }}>
                  <li><AirIcon className="pos-list-icon" />&nbsp;School Management Software</li>
                  <li><AirIcon className="pos-list-icon" />&nbsp;College ERP</li>
                  <li><AirIcon className="pos-list-icon" />&nbsp;Campus Management System</li>
                  <li><AirIcon className="pos-list-icon" />&nbsp;Inventory Management System</li>
                  <li><AirIcon className="pos-list-icon" />&nbsp;Accounts Management System</li>
                  <li><AirIcon className="pos-list-icon" />&nbsp;Biometric Attendance System</li>
                </ul>
              </div>
              <div className="site-cta mt-4">
                <h5 className="fw-bold">Want to have a demo? <a href="https://capobrain.com/" target='blank'>Visit Site</a></h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
