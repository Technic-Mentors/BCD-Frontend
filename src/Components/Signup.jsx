import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const signUpUser = async (e) => {
    e.preventDefault();
    const { password, email } = credentials;
    const res = await fetch("http://localhost:8000/api/auth/createadmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    });
    const data = await res.json();
    const userError = document.getElementById("UserError");
    if (data.error === "invalid credentials") {
      userError.innerText = "invalid credentials";
    } else if (data.error === "admin user already created") {
      userError.innerText = "admin user already created";
    } else {
      userError.innerText = "";
    }
    if (res.status === 200) {
      navigate("/adminpanel");
    }
  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-end mt-3">
        <Link to="/admin"> <button className="btn btn-primary">Log In</button> </Link>
        </div>
        <div className="row d-flex justify-content-center py-5">
          <div className="col-md-6">
            <form onSubmit={signUpUser}>
              <div id="UserError" className="text-danger text-center"></div>
              <label htmlFor="text" className="mt-3">
                Email
              </label>
              <input
                className="form-control"
                name="email"
                value={credentials.email}
                onChange={onchange}
                type="email"
                placeholder="Email"
              />
              <label htmlFor="text" className="mt-3">
                Password
              </label>
              <input
                className="form-control"
                name="password"
                value={credentials.password}
                onChange={onchange}
                type="password"
                placeholder="password"
              />
              <button className="btn btn-primary mt-3">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
