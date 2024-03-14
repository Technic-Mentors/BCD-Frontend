import React, { useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "animate.css";
import emailjs from "@emailjs/browser";

export default function Csr() {
  useEffect(() => {
    AOS.init();
  });

  const [successMessage, setSuccessMessage] = useState("");
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const number = form.number.value.trim();
    const message = form.message.value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const numberError = document.getElementById("numberError");
    const messageError = document.getElementById("messageError");

    let hasError = false;

    if (!name) {
      nameError.innerText = "Please fill this field ";
      hasError = true;
    } else {
      nameError.innerText = ""
    }

    if (!email) {
      emailError.innerText = 'please fill this field'
      hasError = true;
    } else {
      emailError.innerText = "";
    }

    if (!number) {
      numberError.innerText = "Please fill this field ";
      hasError = true;
    } else {
      numberError.innerText = "";
    }

    if (!message) {
      messageError.innerText = "Please fill this field ";
      hasError = true;
    } else {
      messageError.innerText = "";
    }

    if (hasError) {
      return;
    }

    emailjs
      .sendForm(
        "service_922xtbv",
        "template_aaqrpuu",
        formRef.current,
        "IbhvChmY_-f7TeB2E"
      )

      .then((response) => {
        formRef.current.reset();
        setSuccessMessage("Your Message Is Sent Successfully");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      });
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
            <div className="d-flex justify-content-center align-items-center py-7 animate__animated animate__zoomIn">
              <h2 className=" wow text-white fadeInLeft" data-wow-duration="1.5s">
                CSR Policy
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
              Our business operations are aligned with the legitimate socital
              interests of different stakeholders especially youth of the
              society. The guiding principles for our CSR policy are following
              injections of Al-Quran{" "}
              <span className="fables-second-text-color">
                {" "}
                “And spend in the way of Allah from what we have provided you
                before death approaches one of you ……..”
              </span>{" "}
              (10:63) The company is committed to reserve some percentage of its
              financial earnings, expertise and resources for youth development,
              education, healthcare, and poverty alleviation. The CSR activities
              will be executed directly by the company or will be undertaken in
              collaboration with some executing partners/charity or
              philanthropic organizations. Following possible actions deemed fit
              in this regard.
            </p>
            <ul className="mt-3">
              <li>
                {" "}
                <i className="fa-solid fa-arrow-right fables-second-text-color"></i>{" "}
                Contribution towards youth development through seminars, career workshops, entrepreneurial trainings etc.
              </li>
              <li>
                {" "}
                <i className="fa-solid fa-arrow-right fables-second-text-color"></i>{" "}
                Promote education, vocational trainings, healthcare facilities
                and social development.
              </li>
              <li>
                {" "}
                <i className="fa-solid fa-arrow-right fables-second-text-color"></i>{" "}
                Working, supporting and volunteering with national and
                international charities/organizations.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="container">
        <h2
          className="font-30 font-weight-bold fables-second-text-color mt-3 d-inline-block d-lg-block wow fadeInRight text-center"
          data-wow-duration="1.5s"
        >
          Join Hands For CSR?
        </h2>
        <p className="text-center">
          We invite professionals, philanthropists and companies to join hands with us for this noble cause.
        </p>
        <div className="row">
          <div className="col-md-12">
          <form id="contactForm"
                onSubmit={sendEmail}
                ref={formRef} className="fables-contact-form">
                  {successMessage && (
                  <div className="alert alert-info">{successMessage}</div>
                )}
              <div className="row">
              <div className="col-md-6" data-aos="fade-up" data-aos-duration="2000">
                <input
                  type="text"
                  name='name'
                  className="form-control p-3 fables-rounded mt-3"
                  placeholder="Personal or company name"
                />
                  <div className="text-danger" id="nameError"></div>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-duration="2000">
                <input
                  type="email"
                  name='email'
                  className="form-control p-3 fables-rounded mt-3"
                  placeholder="Email Address"
                />
                  <div className="text-danger" id="emailError"></div>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-duration="2000">
                <input
                  type="number"
                  name='number'
                  className="form-control p-3 fables-rounded mt-3"
                  placeholder="Mobile Number"
                />
                  <div className="text-danger" id="numberError"></div>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-duration="2000">
                <input
                  type="file"
                  className="form-control p-3 fables-rounded mt-3"
                />
                </div>
                <div className="col-md-12" data-aos="fade-up" data-aos-duration="2000">
                <textarea
                  type="text"
                  name='message'
                  cols={30}
                  rows={7}
                  className="form-control p-3 fables-rounded mt-3"
                  placeholder="Message"
                />
                  <div className="text-danger" id="messageError"></div>
                </div>
                <div className="col-md-12 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="2000">
                  <button
                    type="submit"
                    className="btn fables-second-background-color 
                         text-white fables-btn-rounded mt-3 px-5 py-2 font-20"
                  >
                    Send
                  </button>
                  </div>
                  </div>
            </form>
            </div>
        </div>
      </div>
    </div>
  );
}
