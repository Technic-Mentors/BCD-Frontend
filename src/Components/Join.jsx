import React, { useRef, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "animate.css";
import emailjs from "@emailjs/browser";

export default function Join() {
  useEffect(() => {
    AOS.init();
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [succesMessage, setSuccesMessage] = useState("");
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
      nameError.innerText = "Please fill this field";
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
      numberError.innerText = "Please fill this field";
      hasError = true;
    } else {
      numberError.innerText = "";
    }

    if (!message) {
      messageError.innerText = "Please fill this field";
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
  const frmRef = useRef();
  const sndEmail = (e) => {
    e.preventDefault();
    const form = frmRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const number = form.number.value.trim();
    const message = form.message.value.trim();

    const namError = document.getElementById("namError");
    const emalError = document.getElementById("emalError");
    const numbrError = document.getElementById("numbrError");
    const messgeError = document.getElementById("messgeError");

    let hasError = false;

    if (!name) {
      namError.innerText = " ";
      hasError = true;
    } else {
      namError.innerText = ""
    }

    if (!email) {
      emalError.innerText = ''
      hasError = true;
    } else {
      emalError.innerText = "";
    }

    if (!number) {
      numbrError.innerText = " ";
      hasError = true;
    } else {
      numbrError.innerText = "";
    }

    if (!message) {
      messgeError.innerText = " ";
      hasError = true;
    } else {
      messgeError.innerText = "";
    }

    if (hasError) {
      return;
    }

    emailjs
      .sendForm(
        "service_922xtbv",
        "template_aaqrpuu",
        frmRef.current,
        "IbhvChmY_-f7TeB2E"
      )

      .then((response) => {
        frmRef.current.reset();
        setSuccesMessage("Your Message Is Sent Successfully");
        setTimeout(() => {
          setSuccesMessage("");
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
                Join Us
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /End Header --> */}
      <div className="container">
        <h2
          className="font-30 font-weight-bold fables-second-text-color my-4 d-inline-block d-lg-block wow fadeInRight text-center"
          data-wow-duration="1.5s"
        >
          Collaborate With Us
        </h2>
        <div className="row">
          <div className="col-md-12" data-aos="fade-up" data-aos-duration="2000">
            <p className="justify-align">
              Our company is established to provide solutions to our clients in their relevant industry domains. Vision of the company and values are the main driving force for our people. We work by collaborating our core competencies with the strength of industry professionals so to deliver the best possible solutions. Collaborative learning and professional enrichment is major outcomes of this collaboration in addition to financial incentives. <span className='fables-second-text-color'> Please leave a message if you are interested for work collaboration with our company. Our team will contact you for any opportunity of work collaboration.</span>
            </p>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="container">
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
      <div className="container">
        <h2
          className="font-30 font-weight-bold fables-second-text-color my-4 d-inline-block d-lg-block wow fadeInRight text-center"
          data-wow-duration="1.5s"
        >
          Job Opportunity
        </h2>
        <div className="row">
          <div className="col-md-12" data-aos="fade-up" data-aos-duration="2000">
            <p>
              Please provide information if you are interested to work for our company. We will approach you for any work opportunity.
            </p>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={sndEmail}
              ref={frmRef} className="fables-contact-form">
              {succesMessage && (
                <div className="alert alert-info">{succesMessage}</div>
              )}
              <div className="row">
                <div className="col-md-6" data-aos="fade-up" data-aos-duration="2000">
                  <input
                    type="text"
                    name="name"
                    className="form-control p-3 fables-rounded mt-3"
                    placeholder="Name"
                  />
                  <div className="text-danger" id="namError"></div>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-duration="2000">
                  <input
                    type="email"
                    name="email"
                    className="form-control p-3 fables-rounded mt-3"
                    placeholder="Email Address"
                  />
                  <div className="text-danger" id="emalError"></div>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-duration="2000">
                  <input
                    type="number"
                    name='number'
                    className="form-control p-3 fables-rounded mt-3"
                    placeholder="Mobile Number"
                  />
                  <div className="text-danger" id="numbrError"></div>
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
                    rows={7}
                    className="form-control p-3 fables-rounded mt-3"
                    placeholder="Message"
                  />
                  <div className="text-danger" id="messgeError"></div>
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
  )
}
