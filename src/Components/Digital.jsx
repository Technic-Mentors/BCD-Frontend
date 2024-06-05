import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "animate.css";
import CallActions from "../Products/CallToActions";

export default function Digital() {

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
              <h2
                className=" wow fadeInLeft text-white"
                data-wow-duration="1.5s"
              >
                Digital Consultancy
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
              Digital technologies are shaping and transforming today’s
              business. The industry is gradually deploying these technologies
              for ecommerce solution, process automation, real time reporting,
              market intelligence and customer experience improvement. Industry
              4.0 tools are not only changing the shape of business but also
              creating disruptive business models. Strategic digital thinking,
              agile business technology and tech savvy talent are foundation of
              “Smart Business” or “Smart Factory”. Our digital solutions help
              our clients to synergize strategy, technology, process, talent and
              culture so to harness the power of digital tools.
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
                    We are developing an ecosystem of engineers, software
                    developers, and business analyst to provide customized,
                    industry relevant and agile solutions so to accelerate the
                    business potential of our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3">
          We offer following portfolio of solution that transforms the
          businesses into smart business and smart factory.
        </p>
      </div>
      {/* About Start */}
      <div className="container position-relative z-index">
        <div className="row d-flex justify-content-between">
          <div
            className="col-md-3 py-3 d-flex align-items-stretch"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                  Business Automation
                </h5>
                <p className="card-text">
                  Streamlining business for efficiency, cost reduction and
                  improved customer satisfaction, ensuring sustained
                  organizational growth.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 py-3 d-flex align-items-stretch"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                  Technology Sourcing
                </h5>
                <p className="card-text">
                  Choosing and procuring third party product solution for
                  business technology needs, strategically enhancing operational
                  capabilities and fostering innovation.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 py-3 d-flex align-items-stretch"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                  Technology Management
                </h5>
                <p className="card-text">
                  Planning and management of technological products, processes
                  and services for human and business advantage.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 py-3 d-flex align-items-stretch"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                  Digital Culture & Skilling
                </h5>
                <p className="card-text">
                  Cultivating digital culture and capabilities for collaboration
                  and innovation, ensuring sustained organizational agility and
                  future-readiness.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 py-3 d-flex align-items-stretch"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                  E-commerce Solution
                </h5>
                <p className="card-text">
                  Transforming traditional business to world business, expanding
                  global reach, and maximizing market coverage for unparalleled
                  growth and sustained success worldwide.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 py-3 d-flex align-items-stretch"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                  Business Analytics
                </h5>
                <p className="card-text">
                  Forecasting future prospects based on past performance,
                  enabling informed managerial interventions and driving
                  sustained organizational success.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 py-3 d-flex align-items-stretch"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                  Digital Marketing
                </h5>
                <p className="card-text">
                  Promoting products and services by web based tools to reach
                  large audience, engaged audience for enhanced brand visibility
                  and market success.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 py-3 d-flex align-items-stretch"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                  Digital Employee Experience (DEX)
                </h5>
                <p className="card-text">
                  Arrange tools and technologies to enhance the overall digital
                  experience for employees, including collaboration platforms,
                  digital training, and employee engagement solutions etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      <div className="container ">
        <div className="row">
          <div
            className="col-md-3 py-3 d-flex align-items-stretch"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                  Artificial Intelligence
                </h5>
                <p className="card-text">
                  Integrating AI for business and market intelligence, HR
                  analytics, and enhanced operational efficiency, driving
                  innovation and sustainable growth.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 py-3 d-flex align-items-stretch"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                  Cybersecurity Services
                </h5>
                <p className="card-text">
                  Robust solutions and tools to protect digital systems, networks, devices and data from unauthorized access, attacks, and damage for data confidentiality and security.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 py-3 d-flex align-items-stretch"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                  Cloud Integration
                </h5>
                <p className="card-text">
                  Solutions to provide on-demand access to servers, storage, databases, networking, software, analytics, and applications over the internet for cost efficiency, faster innovation, flexibility and predictability.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 py-3 d-flex align-items-stretch"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-bussiness">
              <div className="card-body">
                <h5 className="card-title mt-3 font-weight-bold fables-second-text-color">
                  Educational Technology (EdTech)
                </h5>
                <p className="card-text">
                  Leverage digital tools, software, hardware, and educational methodologies in classrooms and educational institutions to transform and improve traditional education models for educational management and interactive learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallActions/>
    </div>
  );
}
