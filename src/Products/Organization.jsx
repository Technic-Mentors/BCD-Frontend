import React from "react";
import CallActions from "./CallToActions";

export default function Organization() {
    return (
        <div>
            <div
                className="fables-header"
                style={{ backgroundImage: "url(assets/custom/images/header.jpg)" }}
            >
                <div className="fables-after-overl">
                    <div className="container">
                        <div className="text-center py-7 text-white animate__animated animate__zoomIn">
                            <h2 className="wow fadeInLeft" data-wow-duration="1.5s">
                                Organization Design
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-3">
                <h2 className="font-30 font-weight-bold fables-second-text-color mt-4 text-center">
                    Excellence with Right Design
                </h2>
                <p>Is your organization facing challenges with structure, roles, or team dynamics? At <strong> BCD Services</strong>, we recognize that achieving organizational excellence requires a strategic approach to organization design, job description development, and restructuring initiatives. We have dedicated pool of professionals who develop comprehensive solutions that are designed to drive sustainable growth. With our services, you'll benefit from:</p>
                <ul style={{ listStyle: "initial" }}>
                    <li>Thorough analysis and process optimization for efficiency and alignment</li>
                    <li>Clear job design and role definition to enhance employee clarity and engagement</li>
                    <li>Strategic support to enhance team dynamics, collaboration, and performance</li>
                    <li>Organization's design alignment with its culture and values for productive work</li>
                    <li>Expert guidance and support throughout the change management process</li>
                </ul>
                <div className="color-overlay2">
                    <div className="container py-5">
                        <div className="row g-4 services-pakage">
                            <div
                                className="col-md-4 "
                            >
                                <div className="rounded bg-light pricing-item">
                                    <div
                                        className="py-3 px-5 text-center rounded-top border-bottom border-dark"
                                        style={{ backgroundColor: "#29B44A" }}
                                    >
                                        <h5 className="m-0 text-white">Basic Package</h5>
                                    </div>
                                    <div className="p-4 text-center fs-5">
                                        <div className="row text-start" >
                                            <div className="col-12">
                                                <div>
                                                    <div className="d-flex">
                                                        <i className="fa fa-check text-success me-2"></i>
                                                        <p>
                                                            Package for basic organizational design
                                                        </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <i className="fa fa-check text-success me-2"></i>
                                                        <p>
                                                            Basic assessment of your organization structure and job roles.
                                                        </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <i className="fa fa-check text-success me-2"></i>
                                                        <p>
                                                            Provide basic organization design recommendations and job descriptions
                                                        </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <i className="fa fa-check text-success me-2"></i>
                                                        <p>
                                                            Formal consultation
                                                        </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <i className="fa fa-check text-success me-2"></i>
                                                        <p>
                                                            Formal training for core team
                                                        </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <i className="fa fa-check text-success me-2"></i>
                                                        <p>
                                                            Maximum one revisions
                                                        </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <i className="fa fa-check text-success me-2"></i>
                                                        <p>
                                                            Recommended for SMEs (less than 100 employees)
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-md-4 "
                            >
                                <div className="rounded bg-light pricing-item">
                                    <div
                                        className="py-3 px-5 text-center rounded-top border-bottom border-primary"
                                        style={{ backgroundColor: "#29B44A" }}
                                    >
                                        <h5 className="m-0 text-white">Standard Package</h5>
                                    </div>
                                    <div className="p-4 text-center fs-5">
                                        <div className="row text-start" >
                                            <div className="col-12">

                                                <div>
                                                    <div className="d-flex">
                                                        <i className="fa fa-check text-success me-2"></i>
                                                        <p>
                                                            Comprehensive package of organization design
                                                        </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <i className="fa fa-check text-success me-2"></i>
                                                        <p>
                                                            Detailed analysis of organization's structure, processes, roles and responsibilities
                                                        </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <i className="fa fa-check text-success me-2"></i>
                                                        <p>
                                                            Detailed organization design with comprehensive job descriptions, qualifications and performance expectations
                                                        </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <i className="fa fa-check text-success me-2"></i>
                                                        <p>
                                                            Formal consultation, support and guidance for successful implementation
                                                        </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <i className="fa fa-check text-success me-2"></i>
                                                        <p>
                                                            Training sessions for HR managers and other related staff
                                                        </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <i className="fa fa-check text-success me-2"></i>
                                                        <p>
                                                            Maximum two revisions
                                                        </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <i className="fa fa-check text-success me-2"></i>
                                                        <p>
                                                            Recommended for large size organizations (More than 100 employees)
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-md-4 "
                            >
                                <div className="rounded bg-light pricing-item">
                                    <div
                                        className="py-3 px-5 text-center rounded-top border-bottom border-dark"
                                        style={{ backgroundColor: "#29B44A" }}
                                    >
                                        <h5 className="m-0 text-white">Customized Package</h5>
                                    </div>
                                    <div className="p-4 text-center fs-5">

                                        <div className="row text-start" >
                                            <div className="col-12">

                                                <div>
                                                    <div className="d-flex">
                                                        <i className="fa fa-check text-success me-2"></i>
                                                        <p>
                                                            Tailored to meet organization’s specific needs, goals, and budget
                                                        </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <i className="fa fa-check text-success me-2"></i>
                                                        <p>
                                                            Our team will work closely with you to addresses specific challenges
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
                </div>
                <p> <strong>Experience the Difference: </strong> Unlock the full potential of your recruitment and selection processes with our packages. Contact us to discuss your needs and find the package or solution that's right for you.</p>
                {/* <div className="d-flex justify-content-center">
                    <p style={{ backgroundColor: "#29B44A", display: "inline-block", color: "white" }} className="p-2">Enhance Structure and Clarity with Tailored Solutions!</p>
                </div> */}
            </div>
                <CallActions/>
        </div>
    )
}