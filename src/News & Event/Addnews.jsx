import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Addnews() {
  const [credentials, setCredentials] = useState({
    title: "",
    postedby: "",
    description: "",
    link: "",
  });
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    oldpassword: "",
    newpassword: "",
  });

  const refForm = useRef();

  const addNews = async (e) => {
    e.preventDefault();
    const form = refForm.current;
    const titleValue = form.title.value.trim();
    const postedbyValue = form.postedby.value.trim();
    const linkValue = form.link.value.trim();
    const descValue = form.description.value.trim();

    const titleErr = document.getElementById("titleError");
    const postedErr = document.getElementById("postedError");
    const linkErr = document.getElementById("linkError");
    const descErr = document.getElementById("descError");
    let Error = false;
    if (!titleValue) {
      titleErr.innerText = "Enter Title Here";
      Error = true;
    } else {
      titleErr.innerText = "";
    }
    if (!postedbyValue) {
      postedErr.innerText = "Fill the field";
      Error = true;
    } else {
      postedErr.innerText = "";
    }
    if (!linkValue) {
      linkErr.innerText = "Enter Link";
      Error = true;
    } else {
      linkErr.innerText = "";
    }
    if (!descValue) {
      descErr.innerText = "Enter Description";
      Error = true;
    } else {
      descErr.innerText = "";
    }

    if (Error) {
      return;
    }
    const { title, postedby, description, link } = credentials;
    const res = await fetch("https://bcd-backend.vercel.app/api/auth/createevent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, postedby, description, link }),
    });
    if (res.status === 200) {
      Swal.fire({
        title: "Uploaded news successfuly",
        icon: "success",
      });
      setCredentials({
        title: "",
        postedby: "",
        description: "",
        link: "",
      });
    }
  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const ChangePassword = async () => {
    const { email, oldpassword, newpassword } = userCredentials;
 const res =  await fetch("https://bcd-backend.vercel.app/api/auth/changePassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, oldpassword, newpassword }),
    });
const data = await res.json()
const ErrorPas = document.getElementById("passwordError")
if(data.error === "User not found"){
  ErrorPas.innerText = "User not found"
} else if (data.error === "old Password does not match"){
  ErrorPas.innerText = "old Password does not match"
} else if (res.ok) {
  // Request was successful, close the modal using Bootstrap's hide method
  ErrorPas.innerText = "";
  Swal.fire({
    icon: "success",
    title: "Password Changed",
    text: "Your password has been changed successfully!",
  });
  setUserCredentials({
    email: "",
    oldpassword: "",
    newpassword: "",
  });
}
    
  };

  const changePass = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-end">
          <Link to="/">
            {" "}
            <button className="btn btn-primary mx-2">Log Out</button>
          </Link>
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Change Password
          </button>
        </div>

        <div className="row">
          <div className="col-md-12">
            <form onSubmit={addNews} ref={refForm}>
              <label htmlFor="text" className="form-lable">
                Title
              </label>
              <input
                type="text"
                id="text"
                name="title"
                value={credentials.title}
                onChange={onchange}
                className="form-control"
              />
              <div id="titleError" className="text-danger"></div>
              <label htmlFor="text" className="form-lable mt-3">
                Posted By
              </label>
              <input
                type="text"
                id="text"
                name="postedby"
                value={credentials.postedby}
                onChange={onchange}
                className="form-control"
              />
              <div id="postedError" className="text-danger"></div>
              <label htmlFor="text" className="form-lable mt-3">
                Link
              </label>
              <input
                type="text"
                id="text"
                name="link"
                value={credentials.link}
                onChange={onchange}
                className="form-control"
              />
              <div id="linkError" className="text-danger"></div>
              <label htmlFor="text" className="form-lable mt-3">
                Description
              </label>
              <textarea
                name="description"
                value={credentials.description}
                onChange={onchange}
                className="form-control"
                id="text"
                cols="70"
                rows="10"
              ></textarea>
              <div id="descError" className="text-danger"></div>
              <button className="btn btn-primary mt-3">Upload News</button>
            </form>
          </div>
        </div>
      </div>
      {/* change password modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Change Password
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="text-center text-danger" id="passwordError"></div>
              <form>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={userCredentials.email}
                  placeholder="Email"
                  onChange={changePass}
                />
                <input
                  type="password"
                  className="form-control mt-4"
                  name="oldpassword"
                  value={userCredentials.oldpassword}
                  placeholder="Old Password"
                  onChange={changePass}
                />
                <input
                  type="password"
                  className="form-control mt-4"
                  name="newpassword"
                  value={userCredentials.newpassword}
                  placeholder="New Password"
                  onChange={changePass}
                />
                <div className="d-flex justify-content-end mt-4">
              <button
                type="button"
                className="btn btn-secondary mx-2"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={ChangePassword}
              >
                Save changes
              </button>
            </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
