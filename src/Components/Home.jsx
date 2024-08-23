import React, { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "animate.css";
import CapoBiz from "../img/capobiz-logo.ico";
import CapoBiz1 from "../img/capobiz-logo1.ico";
import Capobrain from "../img/capobrain-logo.ico";
import Capobrain1 from "../img/capobrain-logo1.ico";
import Testimonial from "./Testimonials";
import BcdLogo from "../img/BCDS Logo.png"
import Homebar from "./Homebar";
import homeImg from "../img/home.avif"


export default function Home() {
  const [isNavbarExpand, setIsNavbarExpand] = useState(true)

  const handleNavbarToggle = (isExpand) => {
    setIsNavbarExpand(isExpand)
  }

  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      {/* !-- Start Header --> */}
      <div className="fables-header">
        <div className="fables-after-overlay">
            <Homebar/>
          <video autoPlay loop muted playsInline className="header-video">
            <source src="assets\custom\Home-header-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="container-fluid px-5">
            <div className="row py-10">
              <div
                className="col-md-5 vertical-border col-11"

                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h1 className="white-color bold-font mb-4">
                  BUSINESS, <span> TALENT & </span>DIGITAL SOLUTIONS
                </h1>
                <h5 className="fables-third-text-color mt-3 light-font fables-header-slider-details">
                  To illuminate and energize so to explore possibilities of the
                  business world.
                </h5>
              </div>
            </div>
          </div>
          <div className="Home-social d-flex flex-direction-row">
            <div>
              <a
                href="https://www.facebook.com/McKinsey/"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle "
              >
                <i className="fab fa-facebook-f text-white"></i>
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/BCDserve"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle "
              >
                <i className="fab fa-twitter text-white"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/bcdserve"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle "
              >
                <i className="fab fa-youtube text-white"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/bcdserve/"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle "
              >
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/bcdserve/"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle me-0"
              >
                <i className="fa-brands fa-instagram text-white"></i>
              </a>
            </div>
            <div>
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

      {/* <!-- /End Header --> */}

      {/* About Start */}
      {/* <div className="fables-price-bg bg-rules overflow-hidden"> */}
      <div className="bg-rules overflow-hidden">
        <div className="container py-4 position-relative z-index">
          <div className="row bg-white p-3 d-flex align-items-center">
            <div
              className="col-md-6 p-0 image-container translate-effect-right wow fadeInLeft mb-3 mb-md-0"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src={homeImg}
                alt=""
                className="w-100 about-img"
                style={{ height: "500px" }}
              />
            </div>
            <div
              className="col-12 col-lg-6 bg-white wow fadeInRight"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h2 className="font-30 font-weight-bold fables-second-text-color">
                About Us
              </h2>
              <p className="fables-main-text-color font-14 my-3">
                Today business operates in more dynamic environment where
                demand fluctuations, globalization and technology explosions
                have compelled for process transformation and business
                remodelling. It is realized that business strategy, talent and
                digitization are core area of today business so our company
                offers industry relevant solutions in these domains. We
                operate in every industry where our services have its
                relevancy.
              </p>
              <div className="about-head">
                <h5>
                  {" "}
                  Business Confidentially
                </h5>
                <p>Our company is duty bound to protect privileged
                  information and to share entrusted information
                  responsibly as per wish and will of individuals,
                  organizations, and institutions.</p>
              </div>
              <div className="about-head">
                <h5>
                  {" "}
                  Self-Accountability
                </h5>
                <p>We are customer centric and our team are accountable for
                  their contribution towards customer experience
                  improvement</p>
              </div>
              <div className="about-head">
                <h5>
                  {" "}
                  Socially Responsible
                </h5>
                <p>Our company never works in isolation, so we are
                  conscious about our contributory role towards society</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* <!-- Start page content --> */}
      <div className="fables-price-bg bg-rules">
        <div className="fables-after-overlay">
          <div className="container py-5">
            <h2 className="font-30 font-weight-bold text-white mb-4 text-center">
              Our Consulting Services
            </h2>
            <div className="row mt-3 d-flex justify-content-between overflow-hidden">
              <div
                className="card pt-1 pb-3 h-card col-lg-3 home-card text-center mb-4 mb-lg-0 wow fadeInDown"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="card-body">
                  <span className="fables-iconbussiness home-card-i fables-second-text-color fa-3x"></span>
                  <h5>Business Consultancy</h5>
                  <p
                    className="fables-forth-text-color home-card-p font-15 mb-4"
                    style={{ textAlign: "left" }}
                  >
                    Our professionals work with clients for business analysis, strategic rethinking, process transformation, re-engineering process and change management.
                  </p>
                  <Link to="/bussiness-soloution"> <button className="btn btn-do">Learn More</button></Link>
                </div>
              </div>
              <div
                className="card pt-1 pb-3 col-lg-3 home-card text-center mb-4 mb-lg-0 wow fadeInDown"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="card-body">
                  <span className="fables-iconbussiness2 home-card-i fables-second-text-color fa-3x"></span>
                  <h5>HR Consultancy</h5>
                  <p
                    className="fables-forth-text-color home-card-p font-15 mb-4"
                    style={{ textAlign: "left" }}
                  >
                    Keeping in view the catalyst role of Human Capital (HC) our company has designed value added services for managing this resource.
                  </p>
                  <Link to="/talent-soloution"> <button className="btn btn-do">Learn More</button></Link>
                </div>
              </div>
              <div
                className="card pt-1 pb-3 col-lg-3 home-card text-center mb-4 mb-lg-0 wow fadeInDown"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="card-body">
                  <span className="fables-iconbussiness3 home-card-i fables-second-text-color fa-3x"></span>
                  <h5>Digital Consultancy</h5>
                  <p
                    className="fables-forth-text-color home-card-p mb-4 font-15"
                    style={{ textAlign: "left" }}
                  >
                    Our company has broadly focused in all possible areas of digitization for organizations.
                  </p>
                  <Link to="/digital-soloution"> <button className="btn btn-do">Learn More</button></Link>
                </div>
              </div>
              <div
                className="card pt-1 pb-3 col-lg-3 home-card text-center mb-4 mb-lg-0 wow fadeInDown"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="card-body">
                  <span className="fables-iconbussiness4 home-card-i fables-second-text-color fa-3x"></span>
                  <h5>Learning and Development</h5>
                  <p
                    className="fables-forth-text-color home-card-p font-15 mb-4"
                    style={{ textAlign: "left" }}
                  >
                    Our company offers many standardized and customized leaning programs so to boost systems thinking, personal mastery and mental .
                  </p>
                  <Link to="/learning-cafe"> <button className="btn btn-do">Learn More</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End page content --> */}

 {/* Product & sloutions */}
 <div className="container">
        <h2 className="font-30 font-weight-bold fables-second-text-color mt-4 text-center">
          Our Product & Solutions
        </h2>
        <div className="row mt-3 d-flex justify-content-between overflow-hidden">
          <div
            className="card pt-1 pb-3 h-card col-lg-3 home-card1 text-center mb-4 mb-lg-0 wow fadeInDown"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card-body">
              <i className="fa fa-sitemap fables-second-text-color home-card-i fa-3x"></i>
              <h5>Organization Design</h5>
              <p
                className="fables-forth-text-color home-card-p font-15 mb-4"
                style={{ textAlign: "left" }}
              >
                BCD Services provides design consultancy to optimize company's structure, roles, and processes to drive efficiency and performance.
              </p>
              <Link to="/organization-design"> <button className="btn btn-do">Learn More</button></Link>
            </div>
          </div>
          <div
            className="card pt-1 pb-3 col-lg-3 home-card1 text-center mb-4 mb-lg-0 wow fadeInDown"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card-body">
              <i className="fa fa-chart-line fables-second-text-color home-card-i fa-3x"></i>
              <h5>HR Analysis & Policy</h5>
              <p
                className="fables-forth-text-color home-card-p font-15 mb-4"
                style={{ textAlign: "left" }}
              >
                With our HR Analysis and Policy service, we build a solid foundation for HR functions aligning it with organization's goals and values.
              </p>
              <Link to="/HR-policy"> <button className="btn btn-do">Learn More</button></Link>
            </div>
          </div>
          <div
            className="card pt-1 pb-3 col-lg-3 home-card1 text-center mb-4 mb-lg-0 wow fadeInDown"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card-body">
              <i className="fa fa-briefcase fables-second-text-color home-card-i fa-3x"></i>
              <h5>Recruitment & Selection</h5>
              <p
                className="fables-forth-text-color home-card-p mb-4 font-15"
                style={{ textAlign: "left" }}
              >
                Our Recruitment & Selection documentation is developed to streamline your hiring process, attract top talent, and ensure compliance with legal requirements.
              </p>
              <Link to="/recruitment-&-selection"> <button className="btn btn-do">Learn More</button></Link>
            </div>
          </div>
          <div
            className="card pt-1 pb-3 col-lg-3 home-card1 text-center mb-4 mb-lg-0 wow fadeInDown"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card-body">
              <i className="fa fa-users fables-second-text-color home-card-i fa-3x"></i>
              <h5>Recruitment Solution</h5>
              <p
                className="fables-forth-text-color home-card-p font-15 mb-4"
                style={{ textAlign: "left" }}
              >
                We offer comprehensive recruitment services to help you find the best candidates for your organization.
              </p>
              <Link to="/recruitment-services"> <button className="btn btn-do">Learn More</button></Link>
            </div>
          </div>
        </div>
        <div className="row mt-3 d-flex justify-content-between overflow-hidden">
          <div
            className="card pt-1 pb-3 h-card col-lg-3 home-card1 text-center mb-4 mb-lg-0 wow fadeInDown"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card-body">
              <i className="fa fa-book fables-second-text-color home-card-i fa-3x"></i>
              <h5>Training Solution</h5>
              <p
                className="fables-forth-text-color home-card-p font-15 mb-4"
                style={{ textAlign: "left" }}
              >
                With our customized training solutions, you can empower your team with the knowledge and skills they need to succeed in today's dynamic business environment.
              </p>
              <Link to="/employees-training"> <button className="btn btn-do">Learn More</button></Link>
            </div>
          </div>
          <div
            className="card pt-1 pb-3 col-lg-3 home-card1 text-center mb-4 mb-lg-0 wow fadeInDown"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card-body">
              <i className="fa fa-file-alt fables-second-text-color home-card-i fa-3x"></i>
              <h5>Specialized Training Manuals</h5>
              <p
                className="fables-forth-text-color home-card-p font-15 mb-4"
                style={{ textAlign: "left" }}
              >
                We are specialized in developing customized training manuals designed to meet the specific needs and objectives of your organization.
              </p>
              <Link to="/specialized-training"> <button className="btn btn-do">Learn More</button></Link>
            </div>
          </div>
          <div
            className="card pt-1 pb-3 col-lg-3 home-card1 text-center mb-4 mb-lg-0 wow fadeInDown"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card-body">
              <i className="fa fa-clipboard-check fables-second-text-color home-card-i fa-3x"></i>
              <h5>Organizational Diagnosis</h5>
              <p
                className="fables-forth-text-color home-card-p mb-4 font-15"
                style={{ textAlign: "left" }}
              >
                Our organizational diagnostics solutions provide insights into the overall health of the organization by analysing processes of organization.
              </p>
              <Link to="/organizational-diagnosis"> <button className="btn btn-do">Learn More</button></Link>
            </div>
          </div>
          <div
            className="card pt-1 pb-3 col-lg-3 home-card1 text-center mb-4 mb-lg-0 wow fadeInDown"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card-body">
              <i className="fa fa-handshake fables-second-text-color home-card-i fa-3x"></i>
              <h5>Employee Engagement</h5>
              <p
                className="fables-forth-text-color home-card-p font-15 mb-4"
                style={{ textAlign: "left" }}
              >
                Employee Engagement Surveys are designed to measure and assess how motivated and engaged your employees are to perform their best at work.
              </p>
              <Link to="/employee-management"> <button className="btn btn-do">Learn More</button></Link>
            </div>
          </div>
        </div>
        <div className="row mt-3 d-flex overflow-hidden">
          <div
            className="card pt-1 pb-3 h-card col-lg-3 home-card1 text-center mb-4 mb-lg-0 wow fadeInDown"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card-body">
              <img
                src={Capobrain}
                alt="capobrain-education-management-system"
                className="img-fluid capo"
                style={{ height: "40px" }}
              />
              <img
                src={Capobrain1}
                alt="capobrain-education-management-system"
                className="img-fluid capo1"
                style={{ height: "40px" }}
              />
              <h5>School/College Management System</h5>
              <p
                className="fables-forth-text-color home-card-p font-15 mb-4"
                style={{ textAlign: "left" }}
              >
                CapoBrain is a versatile Educational Institute Management System that simplifies administrative tasks and facilitates communication between educators, staff, and parents in educational institutions.
              </p>
              <a href="https://capobrain.com/" target="blank"> <button className="btn btn-do">Learn More</button></a>
            </div>
          </div>
          <div
            className="card capobiz-card pt-1 pb-3 col-lg-3 home-card1 text-center mb-4 mb-lg-0 wow fadeInDown"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card-body">
              <img
                src={CapoBiz}
                alt="capobiz-pos-software"
                className="img-fluid capo"
                style={{ height: "40px" }}
              />
              <img
                src={CapoBiz1}
                alt="capobiz-pos-software"
                className="img-fluid capo1"
                style={{ height: "40px" }}
              />
              <h5>Point Of Sale Software</h5>
              <p
                className="fables-forth-text-color home-card-p font-15 mb-4"
                style={{ textAlign: "left" }}
              >
                Step into a new era of business management with our cutting-edge Point of Sale (POS) system. We're not just redefining transactions; we're revolutionizing the way you run your business.
              </p>
              <a href="https://capobiz.com/" target="blank"> <button className="btn btn-do">Learn More</button></a>
            </div>
          </div>
        </div>
      </div>
      {/* Product & sloutions end */}

      {/* Start solutions */}
      <div className="container pb-3">
        <h2 className="font-30 font-weight-bold fables-second-text-color mt-4 text-center">
          Difference We Bring
        </h2>
        <div className="row" style={{ display: "flex" }}>
          <div
            className="col-md-6 mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
            style={{ flex: 1 }}
          >
            <div className="card card-soloution">
              <div className="card-body">
                <h5 className="card-title">Strategic Innovation</h5>
                <p className="card-text">
                  Unleash the power of forward-thinking strategies tailored to your business. We pioneer innovative solutions, adapting to industry trends and anticipating the future landscape. Embrace a partnership that propels your business beyond the ordinary.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-soloution">
              <div className="card-body">
                <h5 className="card-title">Proven Expertise</h5>
                <p className="card-text">
                  Benefit from a wealth of experience and a track record of success. Our seasoned team brings diverse expertise across various industries, offering a comprehensive understanding of challenges and opportunities. Trust in our proven ability to navigate complexities and deliver tangible results.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-soloution">
              <div className="card-body">
                <h5 className="card-title">Client-Centric Approach</h5>
                <p className="card-text">
                  Experience a personalized journey designed around your unique needs. We prioritize your goals and aspirations, ensuring our solutions align seamlessly with your vision. Our client-centric approach fosters collaboration, transparency, and a relationship built on mutual success.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card card-soloution">
              <div className="card-body">
                <h5 className="card-title">Adaptive Solutions</h5>
                <p className="card-text">
                  Stay ahead in a dynamic business landscape with our adaptive solutions. We constantly evolve our strategies, incorporating the latest technologies and methodologies to keep your business agile and resilient. Partner with us to thrive in an ever-changing environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End solutions */}

      {/* Chose Start */}
      <div className="fables-price-bg mt-3 overflow-hidden">
        <div className="fables-after-overlay">
          <div className="container position-relative py-5 z-index">
            <h2 className="white-color font-35 font-weight-bold text-center mb-md-5">
              Why Our Services
            </h2>
            <div className="row">
              <div
                className="col-md-4 chose-col mt-3"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center chose-circle">
                    <i className="fa-solid fa-business-time fa-2x"></i>
                  </div>
                </div>
                <h5 className="text-white mt-3 text-center">
                  Our Solution fit to Business Needs
                </h5>
              </div>
              <div
                className="col-md-4 chose-col mt-3"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center chose-circle">
                    <i className="fa-solid fa-ghost fa-2x"></i>
                  </div>
                </div>
                <h5 className="text-white mt-3 text-center">
                  Just Delegate, We will Take Care
                </h5>
              </div>
              <div
                className="col-md-4 chose-col mt-3"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center chose-circle">
                    <i className="fa-solid fa-money-bill-1 fa-2x"></i>
                  </div>
                </div>
                <h5 className="text-white mt-3 text-center">
                  Best Value of Money & Time
                </h5>
              </div>
              <div
                className="col-md-4 chose-col mt-5"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center chose-circle">
                    <i className="fa-brands fa-buromobelexperte fa-2x"></i>
                  </div>
                </div>
                <h5 className="text-white mt-3 text-center">
                  Our Expertise, Industry Relevant
                </h5>
              </div>
              <div
                className="col-md-4 chose-col mt-5"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center chose-circle">
                    <i className="fa-solid fa-square-person-confined fa-2x"></i>
                  </div>
                </div>
                <h5 className="text-white mt-3 text-center">
                  Business Confidentiality, Works Here
                </h5>
              </div>
              <div
                className="col-md-4 chose-col mt-5"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center chose-circle">
                    <i className="fa-brands fa-intercom fa-2x"></i>
                  </div>
                </div>
                <h5 className="text-white mt-3 text-center">
                  Customer Centric, We Honour Commitment
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      <Testimonial />
      {/*  */}

      {/*  */}
    </div >
  );
}
