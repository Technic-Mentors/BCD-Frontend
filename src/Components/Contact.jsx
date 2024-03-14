import React from "react";
import Calltoaction from "./Calltoaction";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "animate.css";

export default function Contact() {
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
            <div className="d-flex justify-content-center align-items-center py-7 text-white animate__animated animate__zoomIn">
              <h2 className=" wow fadeInLeft" data-wow-duration="1.5s">
                Contact Us
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /End Header --> */}
      {/* <!-- Start page content -->  */}
      <div className="container">
        <div className="row overflow-hidden">
          {/* <div
            className="col-12 col-md-4 text-center px-4 px-lg-5 my-4 my-lg-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="fables-second-border-color border fables-contact-block-border contact-card fables-rounded px-2 pt-3">
              <span className="fables-iconmap-icon fa-3x fables-second-text-color fables-contact-icon bg-white d-inline-block px-4"></span>
              <h2 className="font-16 semi-font my-3">
                Address Information
              </h2>
              <p className="font-14 text-center">
              158, Block D, NESPAK Housing Society, Canal Bank, Lahore
              </p>
            </div>
          </div> */}
          <div
            className="col-12 col-md-4 text-center px-4 px-lg-5 my-4 my-lg-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="fables-second-border-color border fables-contact-block-border fables-rounded contact-card px-2 pt-3">
              <span className="fables-iconemail fa-3x fables-second-text-color d-inline-block px-4"></span>
              <h2 className="font-16 semi-font fables-main-text-color my-3">
                Mail
              </h2>
              <p className="font-14 fables-forth-text-color text-truncate text-center">
                info@bcdserve.com
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-4 text-center px-4 px-lg-5 my-4 my-lg-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="fables-second-border-color border fables-contact-block-border fables-rounded contact-card px-2 pt-3">
              <span className="fables-iconphone fa-3x fables-second-text-color d-inline-block px-4"></span>
              <h2 className="font-16 semi-font fables-main-text-color my-3">
              Phone number
              </h2>
              <p className="font-14 fables-forth-text-color text-center">
                +92  3000 880 323
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-4 text-center px-4 px-lg-5 my-4 my-lg-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="fables-second-border-color border fables-contact-block-border fables-rounded contact-card px-2 pt-3">
              <span className="fables-iconshare-icon fa-3x fables-second-text-color d-inline-block px-4"></span>
              <h2 className="font-16 semi-font fables-main-text-color my-3">
                Stay In Touch
              </h2>
              <ul className="nav fables-contact-social-links">
                <li>
                  <a href="https://www.facebook.com/McKinsey/" target="blank">
                    <i className="fab fa-facebook-f fables-forth-text-color fa-fw"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/bcdserve/" target="blank">
                    <i className="fab fa-instagram fables-forth-text-color  fa-fw"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/bcdserve" target="blank">
                    <i className="fab fa-youtube fables-forth-text-color  fa-fw"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/BCDserve" target="blank">
                    <i className="fab fa-twitter fables-forth-text-color    fa-fw"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/bcdserve/"
                    target="blank"
                  >
                    <i className="fab fa-linkedin fables-forth-text-color   fa-fw"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /End page content --> */}
      {/* <div className="container mt-3">
        <div className="row d-flex justify-content-center">
          <div
            className="col-md-10 col-12 table-responsive"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <table className="table">
              <thead className="contact-table-head">
                <tr>
                  <th>McKinseys & Company</th>
                  <th>BCG</th>
                </tr>
              </thead>
              <tbody className="contact-table">
                <tr>
                  <td>
                    <a href="https://www.facebook.com/McKinsey/" target="blank">
                      https://www.facebook.com/McKinsey/
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://www.facebook.com/BostonConsultingGroup"
                      target="blank"
                    >
                      https://www.facebook.com/BostonConsultingGroup
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.linkedin.com/company/mckinsey/"
                      target="blank"
                    >
                      https://www.linkedin.com/company/mckinsey/
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://www.linkedin.com/company/boston-consulting-group/"
                      target="blank"
                    >
                      https://www.linkedin.com/company/boston-consulting-group/
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://twitter.com/McKinsey" target="blank">
                      https://twitter.com/McKinsey
                    </a>
                  </td>
                  <td>
                    <a href="https://twitter.com/BCG" target="blank">
                      https://twitter.com/BCG
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://www.youtube.com/mckinsey" target="blank">
                      https://www.youtube.com/mckinsey
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://www.youtube.com/user/TheBCGVideo"
                      target="blank"
                    >
                      https://www.youtube.com/user/TheBCGVideo
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.instagram.com/bcg/?hl=en"
                      target="blank"
                    >
                      https://www.instagram.com/bcg/?hl=en
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
      {/* <div className="container">
        <div className="row">
          <div className="col-md-12">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13616.938896260468!2d74.26471371586709!3d31.43520438632437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901172f9072bd%3A0xafeeeb40163afc90!2sNESPAK%20Society%20Nespak%20Housing%20Scheme%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1702378123384!5m2!1sen!2s" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" title="unique" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
        </div>
      </div> */}
    </div>
  );
}
