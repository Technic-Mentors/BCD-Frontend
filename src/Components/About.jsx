import React, { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "animate.css";
import Teamdetail from "./Teamdetail";
import Slider from "react-slick";
import technicMentors from "../img/technic-mentors.png"
import bcdServe from "../img/BCD Learning Cafe.png"
import delta3t from "../img/delta3t.png"
import SAGEZA from "../img/SCI-SAGEZA.png"

export default function About() {
  const [activeTab, setActiveTab] = useState('criminal-lawyer-gujranwala');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  }

  useEffect(() => {
    AOS.init();
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows:false,
    pausOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      {/* <!-- Start Header --> */}
      <div
        className="fables-header"
        style={{ backgroundImage: "url(assets/custom/images/header.jpg)" }}
      >
        <div className="fables-after-overl">
          <div className="container">
            <div className="d-flex justify-content-center align-items-center py-7 text-white animate__animated animate__zoomIn">
              <h2 className=" wow fadeInLeft" data-wow-duration="1.5s">
                About Us
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /End Header --> */}

      {/* about us start */}
      <div className="container">
        <h2
          className="font-30 font-weight-bold fables-second-text-color my-4 d-inline-block d-lg-block wow fadeInRight text-center"
          data-wow-duration="1.5s"
        >
          Company Overview
        </h2>
        <div className="row">
          <div className="col-md-12" data-aos="fade-up" data-aos-duration="2000">
            <p className="justify-align">
              BCD Services (Pvt) Ltd is established with the purpose to provide
              services to business clients in their chosen industry. The company
              provides business, talent and digital solutions so to identify and
              capitalize the potential of its clients for better business
              results. The company operates with common purpose, vision, mission
              and set of values that convert it into a main driving force for
              our clients.{" "}
            </p>

            <p className="mt-3 justify-align">
              <strong> How We Work</strong>: We combine the company’s core competencies with the
              strength of industry professionals and world brands so to serve
              our clients in the best possible way. We emphasize to maintain our
              quality relationships with major stakeholders in a mutually
              beneficial fashion.{" "}
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-5" data-aos="fade-up" data-aos-duration="2000">
            <div className="card mv-card" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, .1)" }}>
              <div className="card-body">
                <span className="fables-iconvision-icon fables-second-text-color fa-3x"></span>
                <h2
                  className="font-30 font-weight-bold fables-second-text-color my-2"
                  data-wow-duration="1.5s"
                >
                  Our Vision
                </h2>
                <p
                  className="fables-vision-detail fables-forth-text-color wow fadeInRight text-start"
                  data-wow-duration="1.5s"
                >
                  <p
                    className="fables-forth-text-color mt-4 wow fadeInLeft"
                    data-wow-duration="1.5s"
                  >
                    To be the best company for embracing and facilitating change for businesses and individuals through business and career development solutions.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-5" data-aos="fade-up" data-aos-duration="2000">
            <div className="card mv-card" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, .1)" }}>
              <div className="card-body">
                <div className="">
                  <span className="fables-iconrocket-icon fables-second-text-color fa-3x"></span>
                </div>
                <h2
                  className="font-30 font-weight-bold fables-second-text-color my-2"
                  data-wow-duration="1.5s"
                >
                  Our Mission
                </h2>
                <p
                  className="fables-vision-detail fables-forth-text-color wow fadeInRight text-start"
                  data-wow-duration="1.5s"
                >
                  We are committed to add value to businesses and individuals for their development through industry-relevant solutions by meaningful engagement of our teams in an ethical professionally compliant way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about us end */}
      {/* mid start */}
      <div
        className="fables-counter-section bg-rules mt-5"
      >
        <div className="fables-after-overlaay">
          <div className="container">
            <div className="row py-4">
            <h2 className="text-center text-white mb-3">Our Collaborations</h2>
              <div>
                <Slider {...settings}>
                  <div>
                    <a
                      href="https://technicmentors.com/"
                      target="blank"
                    >
                      <img src={technicMentors} alt="" style={{ height: "90px", width: "auto", margin: "auto" }} />
                      <h5 className="text-center text-white mt-3">Technic Mentors</h5>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://bcdserve.com/learning-cafe"
                      target="blank"
                    >
                      <img src={bcdServe} alt="" style={{ height: "90px", width: "auto", margin: "auto" }} />
                      <h5 className="text-center text-white mt-3">Learning Café TM</h5>
                    </a>
                  </div>
                  <div>
                    <a
                      href="http://delta3t.com/index.html"
                      target="blank"
                    >
                      <img src={delta3t} alt="" style={{ height: "90px", width: "auto", margin: "auto" }} />
                      <h5 className="text-center text-white mt-3">DELTA3T</h5>
                    </a>
                  </div>
                  <div>
                    <a
                      href="http://www.sci-sageza.org/"
                      target="blank"
                    >
                      <img src={SAGEZA} alt="" style={{ height: "90px", width: "auto", margin: "auto" }} />
                      <h5 className="text-center text-white mt-3">s  c  i  -  s  a  g  e  z  a</h5>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://bcdserve.com/learning-cafe"
                      target="blank"
                    >
                      <img src={bcdServe} alt="" style={{ height: "90px", width: "auto", margin: "auto" }} />
                      <h5 className="text-center text-white mt-3">Learning Café TM</h5>
                    </a>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mid end */}
      {/* Mission Start */}
      <div className="container" data-aos="fade-up" data-aos-duration="2000">
        <div className="row mt-3">
          <div className="col-md-6 d-flex align-items-stretch mt-5" data-aos="fade-up" data-aos-duration="2000">
            <div className="card mv-card" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, .1)" }}>
              <div className="card-body">
                <div className="">
                  <span className="fables-second-text-color fa-3x"><i className="fa-solid fa-handcuffs"></i></span>
                </div>
                <h2
                  className="font-30 font-weight-bold my-2"
                  data-wow-duration="1.5s"
                >
                  Our Quality Policy
                </h2>
                <p
                  className="fables-vision-detail fables-forth-text-color wow fadeInRight text-start"
                  data-wow-duration="1.5s"
                >
                  Data driven, intelligent and competitive solutions through an effective quality management system subject to the company values and belief.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-5" data-aos="fade-up" data-aos-duration="2000">
            <div className="card mv-card" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, .1)" }}>
              <div className="card-body">
                <div className="">
                  <span className="fables-second-text-color fa-3x"><i className="fa-solid fa-parachute-box"></i></span>
                </div>
                <h2
                  className="font-30 font-weight-bold fables-second-text-color my-2"
                  data-wow-duration="1.5s"
                >
                  Our Belief
                </h2>
                <p
                  className="fables-vision-detail fables-forth-text-color wow fadeInRight text-start"
                  data-wow-duration="1.5s"
                >
                  We believe that our is socially and financially viable company
                  if we facilitate change in individuals and organizations’ life
                  by offering industry relevant solutions by keeping our teams
                  financially, socially and spiritually motivated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mission End */}
      <div className="fables-price-bg bg-rules mt-5 mb-5">
        <div className="fables-after-overla py-1">
          <section className="pills-tab-section ">
            <div className="container pt-3 pb-2">
              <div className="section-header mb-4 text-center" data-aos="fade-up" data-aos-offset="200">
                <h2
                  className="font-30 font-weight-bold text-white d-inline-block d-lg-block wow fadeInRight text-center"
                  data-wow-duration="1.5s"
                >
                  Our Values
                </h2>
              </div>
              <div className="row">
                <div className="about-page-values col-md-4">
                  <h5>
                    {" "}
                    Business Confidentially
                  </h5>
                  <p>Our company is duty bound to protect privileged
                    information and to share entrusted information
                    responsibly as per wish and will of individuals,
                    organizations, and institutions.</p>
                </div>
                <div className="about-page-values col-md-4">
                  <h5>
                    {" "}
                    Self-Accountability
                  </h5>
                  <p>We are customer centric and our team are accountable for
                    their contribution towards customer experience
                    improvement</p>
                </div>
                <div className="about-page-values col-md-4">
                  <h5>
                    {" "}
                    Socially Responsible
                  </h5>
                  <p>Our company never works in isolation, so we are
                    conscious about our contributory role towards society</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Teamdetail />
    </div>
  );
}
