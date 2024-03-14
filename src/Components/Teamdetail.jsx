import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "animate.css";

export default function Teamdetail() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="overflow-hidden">
      <div className="">
        <h2 className=" container-fluid fables-second-text-color text-center mb-4"> Advisors & Team </h2>
        <div className="row">
          <div className="col-md-12">
            <div className="px-4">
              <div className="card mb-3 team-card">
                <div className="row g-0 d-flex justify-content-between ">
                  <div
                    className="col-md-2"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <img
                      src="assets/custom/img/Dr. Muhammad Shafiq.webp"
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ backgroundColor: "red" }}
                    />
                  </div>
                  <div
                    className="col-md-9"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="card-body">
                      <h5 className="card-title">Dr. Muhammad Shafiq</h5>
                      <p className="card-text justify-align ">
                        Dr. Muhammad Shafiq has Ph.D. in Information & Computer
                        Engineering and currently teaching consultant in Sultan
                        Qaboos University (SQU), Oman. Before this, he has been
                        engaged with PIASE, Pakistan; KFUPM,KSA; GIKI, Pakistan;
                        IIUI, Pakistan for similar assignments at least 25 years.
                        He has collaborative work with Japanese, Chinese,
                        Egyptian, Saudi Arabian, Sudanese, Italian, Iranian,
                        Canadian, Britisher, American, Malaysian and Turkiah in
                        the fields of intelligent control, automation, mobile
                        robotics and social systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="px-4">
              <div className="card mb-3 team-card">
                <div className="row g-0 d-flex justify-content-between  team-body">
                  <div
                    className="col-md-2"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <img
                      src="assets/custom/img/Eng Akhlaq Ahmad.webp"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div
                    className="col-md-9"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="card-body">
                      <h5 className="card-title">Engr. Akhlaq Ahmad</h5>
                      <p className="card-text justify-align ">
                        Engr. Akhlaq Ahmad is founder and Chief Executive Officer
                        of EPESOL (Pvt) Limited which is representative of GE USA;
                        Arteche Spain; SWI Canada; Fluitec USA and Hafaely
                        Switzerland in Pakistan. He has an excellent academic
                        record with MSc Engineering and MBA from academic
                        institution of good repute. He has completed various
                        technical and management trainings from GE, ABB, GEC
                        ALSTHOM and similar organizations. He has vast experience
                        in Protection Engineering, Corporate Operation and
                        Business Development in Pakistan and Gulf countries.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
              <div className="col-md-12 mt-3">
              <div className="px-4">
                <div className="card mb-3 team-card">
                  <div className="row g-0 d-flex justify-content-between ">
                    <div
                      className="col-md-2"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <img
                        src="assets/custom/img/Engr. Haider Ali.webp"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div
                      className="col-md-9"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <div className="card-body">
                        <h5 className="card-title">Engr. Haider Ali</h5>
                        <p className="card-text justify-align ">
                          Engr. Haider Ali Khan is a professional civil engineer,
                          with academic qualifications of BS Engineering, MS
                          Engineering and MBA. He remained member Governing Body of
                          Pakistan Engineering Council for consecutive 9 years. He
                          is also an associate member of American Society of Civil
                          Engineers (ASCE) and member of American Society of Safety
                          Professionals. He is a genuine entrepreneur and has proven
                          experience of strategic leadership, project management and
                          organizational development roles for successful projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              <div className="col-md-12 mt-3">
              <div className="px-4">
                <div className="card mb-3 team-card">
                  <div className="row g-0 d-flex justify-content-between  team-body">
                    <div
                      className="col-md-2"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <img
                        src="assets/custom/img/Dr. Farooq Tariq Butt.webp"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div
                      className="col-md-9 team-body"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <div className="card-body">
                        <h5 className="card-title">Dr. Farooq Tariq Butt</h5>
                        <p className="card-text justify-align ">
                          He has completed his Ph.D. in Management from AACSB
                          accredited university UUM (Universiti Utara Malaysia).
                          Previously he has done Master’s in Human Resource
                          Management and Bachelor’s Degree in Software Engineering.
                          His main interests remain in eHR and Human Resource
                          Information System. He has served education and software
                          industry in various managerial roles for at least 15
                          years.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              <div className="col-md-12 mt-3">
                <div className="px-4">
                <div className="card mb-3 team-card">
                  <div className="row g-0 d-flex justify-content-between ">
                    <div
                      className="col-md-2"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <img
                        src="assets/custom/img/Amir Gul Piracha.webp"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div
                      className="col-md-9"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <div className="card-body">
                        <h5 className="card-title">Amir Gul Piracha </h5>
                        <p className="card-text justify-align ">
                          Aamir is a seasoned MBA Engineer with international work and educational history. In addition to more than a decade of industry experience, he has been associated with PIM, IBA, Karachi; IoBM, as management training consultant. His core expertise is in Operations, Quality, and Project Management. He has certifications in Project Management (PMP), Quality Management (ISO 9000) and ERP (SAP).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="col-md-12 mt-3">
                <div className="px-4">
                  <div className="card mb-3 team-card">
                    <div className="row g-0 d-flex justify-content-between  team-body">
                      <div
                        className="col-md-2"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                      >
                        <img
                          src="assets/custom/img/Mr. Muhammad Nadeem Munir.webp"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div
                        className="col-md-9 team-body"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                      >
                        <div className="card-body">
                          <h5 className="card-title">Mr. Nadeem Munir </h5>
                          <p className="card-text justify-align ">
                            Mr. Muhammad Nadeem Munir is an experienced IT
                            professional and CEO of Technic Mentors. He has earned 18+
                            years’ experience in Software Development, Software QA/QC,
                            Professional Trainings, Teaching and Project Management.
                            He is providing consultancy and development services to
                            renowned organizations globally that includes Web Design
                            and Development, Software and Mobile Application
                            Development, ERPs Development, Data Science, Artificial
                            Intelligence, Digital Marketing, and e-commerce.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* </div>
          </div> */}
          <div className="col-md-12 mt-3">
            <div className="px-4">
              <div className="card mb-3 team-card">
                <div className="row g-0 d-flex justify-content-between ">
                  <div
                    className="col-md-2"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <img
                      src="assets/custom/img/Engr. Wahaj Us Siraj, CEO.webp"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div
                    className="col-md-9"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="card-body">
                      <h5 className="card-title">Engr Wahaj Us Siraj</h5>
                      <p className="card-text justify-align ">
                        After completing his B.Sc Engineering he has gain work experience in SKB Engineering & Construction (Pvt.) Ltd and National Logistics Cell (NLC) Engineers. He has contributed for DESCON Engineering Company as consulting engineer especially for international projects. He is also pursuing his Master of Engineering from UET, Lahore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="px-4">
              <div className="card mb-3 team-card">
                <div className="row g-0 d-flex justify-content-between  team-body">
                  <div
                    className="col-md-2"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <img
                      src="assets/custom/img/Ayesha Shafiq , BDE.webp"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div
                    className="col-md-9"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="card-body">
                      <h5 className="card-title">Ayesha Shafique</h5>
                      <p className="card-text justify-align ">
                        She has completed her Business Studies from UET, Lahore with distinction. During her study she has completed various academic assignments and projects that cover the areas of Business Development, Management Information System, Business Analytics and Talent Management. She has entrepreneurial attitude with creative mindset and today’s digital skills
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
