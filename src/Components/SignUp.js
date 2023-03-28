import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="m-5">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label mt-2">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
          <label for="inputPassword5" className="form-label mt-2">
            Password
          </label>
          <input
            type="password"
            id="inputPassword5"
            className="form-control"
            aria-labelledby="passwordHelpBlock"
          />
          <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </div>
          <label for="inputPassword6" className="form-label mt-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="inputPassword6"
            className="form-control"
            aria-labelledby="confirm-passwordHelpBlock"
          />
          <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </div>
          <div className="mt-4 col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
