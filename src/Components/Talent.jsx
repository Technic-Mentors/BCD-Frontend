import React from 'react'
import Calltoaction from "./Calltoaction";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "animate.css";

export default function Talent() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      {/* <!-- Start Header --> */}
      <div
        className="fables-header"
        style={{ backgroundImage: "url(assets/custom/images/header.jpg)" }}
      >
        <div className="fables-after-overl">
          <div className="container">
            <div className="d-flex justify-content-center align-items-center pt-7 pb-7 animate__animated animate__zoomIn">
              <h2 className=" wow fadeInLeft text-white" data-wow-duration="1.5s">
                HR Consultancy
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /End Header --> */}

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12" data-aos="fade-up"
            data-aos-duration="2000">
            <p className="justify-align">
              This century come up with talent war for businesses that is defining new dynamics of the business. Success of business relies on this critical resource “The Talent” with backup of the right organization structure, systems, and skills. Main emphasis of our solutions is to assess, rediscover and develop people systems so to run today operations seamlessly for future business outcomes. Our talent solution helps business client to make the best out of their people by aligning people and business strategy.
            </p>
          </div>
          <div className="col-md-12" data-aos="fade-up"
            data-aos-duration="2000">
            <div className="card fables-testimonial mt-3">
              <div className="fables-after-overlay">
                <div className="card-body py-4">
                  <p className="card-text text-white justify-align">
                    We synergize expertise of organizational development professionals so to devise customized, industry relevant and agile solutions to address people related issues of businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3">
          We offer following portfolio of solutions that fuel the talent for business productivity.
        </p>
      </div>
      {/* About Start */}
      <div className="container position-relative z-index">
        <div className="row d-flex justify-content-between">
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up"
            data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">

                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Talent Hunting</h5>
                <p className="card-text">
                  Proactively source and recruit strategic talent, precisely aligned with client's business needs, ensuring success and sustained competitive advantage.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up"
            data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">

                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Testing & Assessment</h5>
                <p className="card-text">
                  Customized test and assessment solution for recruitment and other HRs purposes, ensuring precision and efficiency in talent evaluation.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up"
            data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">

                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Performance Management</h5>
                <p className="card-text">
                  Designing performance management system with the purpose to improve usefulness of people process and capabilities.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up"
            data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">

                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Employer Branding</h5>
                <p className="card-text">
                  Branding and marketing of organization image in the eyes of prospective employee and and public as per HR policy of client to attract top talent.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up"
            data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">

                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Employee Health & Safety</h5>
                <p className="card-text">
                  Designing health and safety system for secured and healthy workplace environment for sustained well-being.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up"
            data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">

                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">HR Outsourcing</h5>
                <p className="card-text">
                  Making a contractual agreement with business clients to share HR responsibility through contractual agreements for streamlined efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up"
            data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">

                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">VHR Solution</h5>
                <p className="card-text">
                  Establishing HR partnership with business clients for various HR processes, fostering organizational excellence and sustained workforce success.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up"
            data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">

                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Employee Engagement</h5>
                <p className="card-text">
                  Suggest managerial intervention for employee engagement so to divert their cognitive, emotional, and behavioural energies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      <Calltoaction />
      <div className="container">
        <div className="row">
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up"
            data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">

                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">People Process</h5>
                <p className="card-text">
                  Develop inclusive solution for business clients so to align their people, process and technology to streamline and improve the people operation.
                </p>
              </div>
            </div>
          </div>
        <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up"
            data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">

                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Training & Development</h5>
                <p className="card-text">
                Our customized training programs help organizations to build skilled and capable workforce, foster continuous improvement, and stay competitive in dynamic business environments.
                </p>
              </div>
            </div>
          </div>
        <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up"
            data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">

                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Employee Relations</h5>
                <p className="card-text">
                Provide professional services to firms in managing and improving employers-employees relations, conflicts resolution, labour laws compliance, and the overall work environment.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up"
            data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">

                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">eHR, HCM & HR Analytics</h5>
                <p className="card-text" data-aos="fade-up"
                  data-aos-duration="2000">
                  Provide tailor made in house or source third party technology solution for business efficiency and data driven decision making.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
