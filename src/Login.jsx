import { event } from "jquery";
import React, { useState } from "react";

let Login = () => {
  const [email, setEmail] = useState("abc@test.com");
  const [password, setPassword] = useState("Abhi123");

  return (
    <div className="row">
      <div className="col-lg-5 col-md-7 mx-auto">
        <div className="card border-success shadow-lg mr-2">
          <div className="card-harder border-bottom border-success">
            <h4
              style={{ fontSize: "40px" }}
              className="text-success text-center"
            >
              Login
            </h4>
          </div>
          <div className="card-body border-bottom border-success">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  console.log(email);
                }}
              ></input>
            </div>
            {/* emails ends here */}

            {/* password start here */}

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  console.log(password);
                }}
              ></input>
            </div>
            {/* emails ends here */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
