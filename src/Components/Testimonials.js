import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    className: "center",
        centerMode: true,
        autoplay:true,
        infinite: true,
        centerPadding: "280px",
        arrows: false,
        slidesToShow: 1,
        speed: 500,
        responsive: [
          {
            breakpoint: 600,
            settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",

        }
      }
    ]
  };
  // const settings = {
  //     
  //   };

  return (
    <div>
      {/* Testimonial Start */}
      <div className="light-bg">
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "600px" }}
          >
            <h1>
            <span style={{ color: "#29B44A" }}> What Our Clients Say!</span>
            </h1>
          </div>
          <Slider {...settings} className="testimonial-carousel" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div className="testimonial-item text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="assets\custom\img\image2.jpg"
                style={{ width: "100px", height: "100px" }}
                alt="client"
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  CapoBrain's user-friendly interface has made it easy for us to
                  manage student information, schedule classes, and track
                  attendance without any hassle.
                </p>
                <h5 className="mb-1">Nimra Ihsan </h5>
                <span className="fst-italic">Manager HR (The Educators)</span>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="assets\custom\img\image1.webp"
                style={{ width: "100px", height: "100px" }}
                alt="client"
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  CapoBrain has revolutionized the way our school manages
                  administrative tasks. It has made our work easier, more
                  efficient, and allowed us to focus on student success.
                </p>
                <h5 className="mb-1">Asim Rasool</h5>
                <span className="fst-italic">Director (Apex College)</span>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="assets\custom\img\sikandar.webp"
                style={{ width: "100px", height: "100px" }}
                alt="client"
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  With CapoBrain, our teachers have been able to easily assign
                  tasks and communicate with parents, creating a more
                  collaborative learnign environment.
                </p>
                <h5 className="mb-1">Sikandar Nawaz Cheema</h5>
                <span className="fst-italic">
                Principal (Falcon Central School)
                </span>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="assets\custom\img/Faizan MInhas.webp"
                style={{ width: "100px", height: "100px" }}
                alt="client"
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  CapoBrain has helped us enhance our communication & build
                  stronger relationships, leading to parents engagement and
                  involvement in child's education.
                </p>
                <h5 className="mb-1">Faizan Minhas</h5>
                <span className="fst-italic">
                General Manager (Dar e Arqam Schools)
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
}
