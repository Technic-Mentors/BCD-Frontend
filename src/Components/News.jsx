import React, { useEffect, useState } from "react";
import header from "../img/header.jpg";

export default function News() {
  const [news, setNews] = useState([]);
  const [event, setEvent] = useState([]);
  const getAllNews = async () => {
    await fetch("https://bcd-backend.vercel.app/api/auth/getevent", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setNews(data));
  };
  useEffect(() => {
    getAllNews();
  });
  const getNews = async (id) => {
    await fetch(`https://bcd-backend.vercel.app/api/auth/getevent/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setEvent(data));
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div>
      <div
        className="fables-header"
        style={{ backgroundImage: `url(${header})` }}
      >
        <div className="fables-after-overl">
          <div className="container">
            <div className="d-flex justify-content-center align-items-center py-7 text-white animate__animated animate__zoomIn">
              <h2 className=" wow fadeInLeft" data-wow-duration="1.5s">
                News & Events
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-between">
          {news &&
            news.map((news) => {
              return (
                <div className="col-md-4 my-4" key={news._id}>
                  <div className="card news-card">
                    <div className="card-body">
                      <h5 className="card-title">{news.title}</h5>
                      <h6 className="card-subtitle mb-2 mt-3 text-muted">
                        Posted By :{" "}
                        <span style={{ color: "#29B44A" }}>
                          {news.postedby}
                        </span>
                      </h6>
                      <h6 className="card-subtitle mb-2 mt-3 text-muted">
                        Posted Date :{" "}
                        <span style={{ color: "#29B44A" }}>
                          {formatDate(news.date)}
                        </span>
                      </h6>
                      <div
                        style={{ color: "#29B44A", cursor:"pointer" }}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() => getNews(news._id)}
                      >
                        Details
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                News Detail
              </h5>
            </div>
            <div className="modal-body">
              <table className="table table-bordered">
                <tr>
                  <th>Title</th>
                  <td>{event.title}</td>
                </tr>
                <tr>
                  <th>Posted By</th>
                  <td>{event.postedby}</td>
                </tr>
                <tr>
                  <th>Message</th>
                  <td className="text-wrap">{event.description}</td>
                </tr>
                <tr>
                  <th>Link</th>
                  <td>{event.link}</td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>{formatDate(event.date)}</td>
                </tr>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
