import React from "react";
import Calltoaction from "./Calltoaction";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "animate.css";

export default function Bussiness() {
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
                Business Consultancy
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /End Header --> */}

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12" data-aos="fade-up" data-aos-duration="2000">
            <p className="justify-align">
              Today business environment is very much dynamic and uncertain due
              to globalization, exponential technology growth, economic and
              social changes in the world. Disruptive business models are
              imperative for sustainability in this era of fierce business
              competition. So businesses need to redefine their purpose, realign
              their operations, rethink their models and rediscover their
              potential for innovative value chain propositions. Our company
              provide innovative solutions for this rethinking, business
              sustainability and excellent performance.{" "}
            </p>
          </div>
          <div className="col-md-12" data-aos="fade-up" data-aos-duration="2000">
            <div className="card fables-testimonial mt-3">
              <div className="fables-after-overlay">
                <div className="card-body py-4">
                  <p className="card-text text-white justify-align">
                    We synergize our professional and project teams so to team up
                    for client specific problems and devise focused, industry
                    relevant and innovative business solutions. The company may
                    also work out third party solution for its business clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3">
          We offer following portfolio of solutions that definitely help
          business in their specific domains.
        </p>
      </div>
      {/* About Start */}
      <div className="container position-relative z-index">
        <div className="row d-flex justify-content-between">
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up" data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">360 Organizational Diagnostics</h5>
                <p className="card-text">
                  Trigger strategic, system, technology, human and culture interventions based on health diagnosis of your organization.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up" data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Behavioural Diagnostics</h5>
                <p className="card-text">
                  Design and conduct behaviour diagnostic of people, customers, social groups of any business with a purpose.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up" data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Organization Design & Restructuring</h5>
                <p className="card-text">
                  Create an organization design and structure well aligned with your business strategy that thrives amidst change.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up" data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Business Process Reengineering (BPR)</h5>
                <p className="card-text">
                  Identify the bottlenecks of existing process and workflow so to radically redesign work for process improvement
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up" data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Business Modelling</h5>
                <p className="card-text">
                  Propose innovative  or improved business models for your business that will create and deliver best value for stakeholders in terms of economic, social, cultural.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up" data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Business Collaboration</h5>
                <p className="card-text">
                  Leverage the businesses for work, technology, knowledge and financial collaboration for market access, sales growth, bigger contracts.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up" data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Business Promotion</h5>
                <p className="card-text">
                  Help the businesses to promote their products, services and brand by identifying target population and channelize the  message to that audience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up" data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Change Management</h5>
                <p className="card-text">
                  Recommend, support, navigate and provide lead to individuals, teams, and organizations so to cultivate new culture, deploy new processes.
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
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up" data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Business Research & Analytics</h5>
                <p className="card-text">
                  Help your business regarding analytics by deploying statistical and digital techniques providing actionable insights.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up" data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Business Process Outsourcing (BPO)</h5>
                <p className="card-text">
                  Making a contract or source third party agreement with business clients to own, administer and manage the selected business processes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up" data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="overlay-image">
                <div className="card-body">
                  <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Business Planning</h5>
                  <p className="card-text">
                    Services regarding business development may include market analysis, SWOT analysis, HR needs, risk analysis, financial estimates etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 d-flex align-items-stretch" style={{ backgroundColor: "white", borderRadius: "1rem" }} data-aos="fade-up" data-aos-duration="2000">
            <div className="card card-bussiness">
              <div className="overlay-image">
                <div className="card-body">
                  <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">Business Law Consultancy</h5>
                  <p className="card-text">
                  Assist in making informed legal decisions, managing risks, and resolving legal issues that arise during business operations
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
