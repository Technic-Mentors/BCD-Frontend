import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "animate.css";

export default function Learningcafe() {
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
            <div className="d-flex justify-content-center align-items-center py-7 animate__animated animate__zoomIn">
              <h2
                className=" wow fadeInLeft text-white"
                data-wow-duration="1.5s"
              >
                Learning Cafe
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /End Header --> */}

      <div className="container mt-4">
        <div className="row">
          <div
            className="col-md-12"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <p className="justify-align">
              Performance improvement requires learning commitment on the part
              of individuals and organizations. The learning interventions
              nurture body of knowledge and cultivate various skills that are
              pre-requisite for success. Business trainings develop knowledge
              about various aspects of business, best practices, and necessary
              skills for success. We have designed various training programs
              that ensure employee meaningful engagement with their behavioural
              changes. These programs are well aligned with individual and
              industry specific needs so to ensure best value in terms of career
              and business success.
            </p>
          </div>
          <div
            className="col-md-12"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card fables-testimonial mt-3">
              <div className="fables-after-overlay">
                <div className="card-body py-4">
                  <p className="card-text text-white justify-align">
                    Learning Café is designed with an objective to provide best
                    mentoring and experiential learning experience by our
                    professional trainers to the participants so that they can
                    capitalize their potential for career and business success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3">
          We offer following portfolio of blended learning programs that deemed
          fit as per job market and industry requirement.
        </p>
      </div>
      {/* About Start */}
      <div className="container position-relative z-index">
        <div className="row d-flex justify-content-between">
          <div
            className="col-md-4 py-3 d-flex align-items-stretch"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                  Corporate Trainings
                </h5>
                <p className="card-text" style={{textAlign:"left"}}>
                  Employee Training, Management Development, Leadership
                  Development, Functional Areas Trainings etc.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 py-3 d-flex align-items-stretch"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                  Career Development
                </h5>
                <p className="card-text" style={{textAlign:"left"}}>
                  Market Yourself, Communicate Yourself, Interview Management,
                  Job Success, Personal Branding, Professional Networking,
                  Career Planning, Monetize Yourself etc.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 py-3 d-flex align-items-stretch"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                  Entrepreneurial Trainings
                </h5>
                <p className="card-text" style={{textAlign:"left"}}>
                  Entrepreneurial DNA, Business Idea Generation, Value
                  Proposition, Business Modelling, Business Planning, Company
                  Formation, New Venture Marketing, Venture Financing, Business
                  Incubation etc.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 py-3 d-flex align-items-stretch"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                  Skill Development Program
                </h5>
                <p className="card-text" style={{textAlign:"left"}}>
                  Basic Management Skills, Business Communication, Office
                  Management, Business Presentation, Freelancing, Social Media
                  Marketing, Business Analytics etc.
                </p>
              </div>
            </div>
          </div>
          <div
              className="col-md-4 py-3 d-flex align-items-stretch"
              style={{ backgroundColor: "white", borderRadius: "1rem" }}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="card card-bussiness">
                <div className="card-body">
                  <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                    Academic Learning
                  </h5>
                  <p className="card-text" style={{textAlign:"left"}}>
                    Business Research Methods, Proposal Development, Report
                    Writing, Data Analysis etc.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 py-3 d-flex align-items-stretch"
              style={{ backgroundColor: "white", borderRadius: "1rem" }}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="card card-bussiness">
                <div className="card-body">
                  <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                    Business Internships
                  </h5>
                  <p className="card-text" style={{textAlign:"left"}}>
                    Short duration internships in the areas of business policy,
                    organizational development, business and industry research
                    etc.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/* About End */}
    </div>
  );
}
