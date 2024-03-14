import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mt-4" style={{ overflow: "hidden" }}>
      <h2 className="fables-second-text-color text-center mb-4"> Team </h2>
      <Slider {...settings}>
        <div className="fables-team-block fables-team-blck fables-second-hover-text-color fables-team-border">
          <div className="image-container shine-effect">
            <a href="#/">
              <img
                className=" img-fluid"
                src="assets\custom\img\Dr. Muhammad Shafiq.webp"
                alt="cap"
              />
            </a>
          </div>
          <div className="card-body">
            <h5 style={{padding:"10px"}}>
              <a
                href="#/"
                className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name"
              >
                Dr. Muhammad Shafiq
              </a>
            </h5>
          </div>
        </div>
        <div className="fables-team-block fables-team-blck fables-second-hover-text-color fables-team-border ">
          <div className="image-container shine-effect">
            <a href="#/">
              <img
                className=" img-fluid"
                src="assets\custom\img\Eng Akhlaq Ahmad.webp"
                alt="cap"
              />
            </a>
          </div>
          <div className="card-body">
            <h5 style={{padding:"10px"}}>
              <a
                href="#/"
                className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name"
              >
                Engr. Akhlaq Ahmad
              </a>
            </h5>
          </div>
        </div>
        <div className="fables-team-block fables-team-blck fables-second-hover-text-color fables-team-border  ">
          <div className="image-container shine-effect">
            <a href="#/">
              <img
                className=" img-fluid"
                src="assets\custom\img\Engr. Haider Ali.webp"
                alt="cap"
              />
            </a>
          </div>
          <div className="card-body">
            <h5 style={{padding:"10px"}}>
              <a
                href="#/"
                className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name"
              >
                Engr. Haider Ali
              </a>
            </h5>
          </div>
        </div>
        <div className="fables-team-block fables-team-blck fables-second-hover-text-color fables-team-border  ">
          <div className="image-container shine-effect">
            <a href="#/">
              <img
                className=" img-fluid"
                src="assets\custom\img\Dr. Farooq Tariq Butt.webp"
                alt="cap"
              />
            </a>
          </div>
          <div className="card-body">
            <h5 style={{padding:"10px"}}>
              <a
                href="#/"
                className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name"
              >
                Dr. Farooq Tariq Butt
              </a>
            </h5>
          </div>
        </div>
        <div className="fables-team-block fables-team-blck fables-second-hover-text-color fables-team-border  ">
          <div className="image-container shine-effect">
            <a href="#/">
              <img
                className=" img-fluid"
                src="assets\custom\img\Amir Gul Piracha.webp"
                alt="cap"
              />
            </a>
          </div>
          <div className="card-body">
            <h5 style={{padding:"10px"}}>
              <a
                href="#/"
                className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name"
              >
                Amir Gul Piracha
              </a>
            </h5>
          </div>
        </div>
        <div className="fables-team-block fables-team-blck fables-second-hover-text-color fables-team-border  ">
          <div className="image-container shine-effect">
            <a href="#/">
              <img
                className=" img-fluid"
                src="assets\custom\img\Mr. Muhammad Nadeem Munir.webp"
                alt="cap"
              />
            </a>
          </div>
          <div className="card-body">
            <h5 style={{padding:"10px"}}>
              <a
                href="#/"
                className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name"
              >
                Mr. Muhammad Nadeem
              </a>
            </h5>
          </div>
        </div>
        <div className="fables-team-block fables-team-blck fables-second-hover-text-color fables-team-border  ">
          <div className="image-container shine-effect">
            <a href="#/">
              <img
                className=" img-fluid"
                src="assets\custom\img\Engr. Wahaj Us Siraj, CEO.webp"
                alt="cap"
              />
            </a>
          </div>
          <div className="card-body">
            <h5 style={{padding:"10px"}}>
              <a
                href="#/"
                className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name"
              >
                Engr Wahaj Us Siraj
              </a>
            </h5>
          </div>
        </div>
        <div className="fables-team-block fables-team-blck fables-second-hover-text-color fables-team-border  ">
          <div className="image-container shine-effect">
            <a href="#/">
              <img
                className=" img-fluid"
                src="assets\custom\img\Ayesha Shafiq , BDE.webp"
                alt="cap"
              />
            </a>
          </div>
          <div className="card-body">
            <h5 style={{padding:"10px"}}>
              <a
                href="#/"
                className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name"
              >
                Ayesha Shafique{" "}
              </a>
            </h5>
          </div>
        </div>
      </Slider>
      <div className="d-flex justify-content-center mt-3">
        <Link to="/team">
          {" "}
          <button className="btn btn-clr white-color rounded-0 mt-3 px-md-4 py-2 fables-second-hover-background-color">
            Team Detail
          </button>
        </Link>
      </div>
    </div>
  );
}
