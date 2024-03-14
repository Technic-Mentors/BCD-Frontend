import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Allnews() {
  const [Allnews, setAllNews] = useState([]);
  const [news, setNews] = useState([]);
  const [editNews, setEditNews] = useState([]);

  const allNews = async () => {
    await fetch("https://bcd-backend.vercel.app/api/auth/getevent", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  };

  useEffect(() => {
    allNews();
  }, []);

  const deleteEvent = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your news has been deleted.",
          icon: "success",
        });
      }
      return result;
    });

    if (isConfirmed) {
      await fetch(`https://bcd-backend.vercel.app/api/auth/delevent/${id}`, {
        method: "DELETE",
      });
      allNews();
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const viewEvent = async (id) => {
    await fetch(`https://bcd-backend.vercel.app/api/auth/getevent/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setNews(data));
  };

  const editEvents = async (id) => {
    await fetch(`https://bcd-backend.vercel.app/api/auth/getevent/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setEditNews(data));
  };

  const updateEvent = async () => {
    const { isConfirmed } = await Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    });

    if (isConfirmed) {
      const { title, postedby, description, link } = editNews;
      await fetch(`https://bcd-backend.vercel.app/api/auth/editevent/${editNews._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, postedby, link }),
      });

      Swal.fire("Saved!", "", "success");
    } else {
      Swal.fire("Changes are not saved", "", "info");
    }
    allNews();
  };

  const onchange = (e) => {
    setEditNews({ ...editNews, [e.target.name]: e.target.value });
  };
  return (
    <div className="mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Posted By</th>
            <th>Link</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Allnews &&
            Allnews.map((news, key) => {                     
              return (
                <tr>
                  <td className="text-wrap">{news.title}</td>
                  <td>{news.postedby}</td>
                  <td>{news.link}</td>
                  <td>{formatDate(news.date)}</td>
                  <td>
                    <i
                      className="fa-solid fa-eye me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      style={{ color: "blue" }}
                      onClick={() => viewEvent(news._id)}
                    ></i>
                    <i
                      className="fas fa-edit me-1"
                      style={{ color: "blue" }}
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop1"
                      onClick={() => editEvents(news._id)}
                    ></i>
                    <i
                      className="fas fa-trash"
                      style={{ color: "blue" }}
                      onClick={() => deleteEvent(news._id)}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {/* view modal */}
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                News
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <label htmlFor="text" className="form-lable">
                  Title
                </label>
                <input
                  type="text"
                  id="text"
                  name="title"
                  value={news.title}
                  className="form-control"
                />
                <label htmlFor="text" className="form-lable mt-3">
                  Posted By
                </label>
                <input
                  type="text"
                  id="text"
                  name="postedby"
                  value={news.postedby}
                  className="form-control"
                />
                <label htmlFor="text" className="form-lable mt-3">
                  Link
                </label>
                <input
                  type="text"
                  id="text"
                  name="link"
                  value={news.link}
                  className="form-control"
                />
                <label htmlFor="text" className="form-lable mt-3">
                  Description
                </label>
                <textarea
                  name="description"
                  value={news.description}
                  className="form-control"
                  id="text"
                  cols="10"
                  rows="5"
                ></textarea>
              </form>
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

      {/* edit modal */}
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                News
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <label htmlFor="text" className="form-lable">
                  Title
                </label>
                <input
                  type="text"
                  id="text"
                  name="title"
                  value={editNews.title}
                  onChange={onchange}
                  className="form-control"
                />
                <label htmlFor="text" className="form-lable mt-3">
                  Posted By
                </label>
                <input
                  type="text"
                  id="text"
                  name="postedby"
                  value={editNews.postedby}
                  onChange={onchange}
                  className="form-control"
                />
                <label htmlFor="text" className="form-lable mt-3">
                  Link
                </label>
                <input
                  type="text"
                  id="text"
                  name="link"
                  value={editNews.link}
                  onChange={onchange}
                  className="form-control"
                />
                <label htmlFor="text" className="form-lable mt-3">
                  Description
                </label>
                <textarea
                  name="description"
                  value={editNews.description}
                  onChange={onchange}
                  className="form-control"
                  id="text"
                  cols="10"
                  rows="5"
                ></textarea>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={updateEvent}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
