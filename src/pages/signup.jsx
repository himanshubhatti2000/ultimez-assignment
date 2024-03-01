import React from "react";
import { useState } from "react";

const initialState = {
  email: "",
  fullName: "",
  password: "",
  username: "",
  referralId: "",
  mobileNumber: "",
  country: "",
};

const Signup = () => {
  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, username, referralId, mobileNumber, country } =
      state;
    console.log(state);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <h2>Signup</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input name="email" value={state.email} onChange={handleChange} />
        </div>
        <div>
          <label>Username</label>
          <input
            name="username"
            value={state.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Full Name</label>
          <input
            name="fullName"
            value={state.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Mobile number</label>
          <input
            name="mobileNumber"
            value={state.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Full name</label>
          <input
            name="fullName"
            value={state.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Country</label>
          <input name="country" value={state.country} onChange={handleChange} />
        </div>
        <div>
          <label>Referral Id</label>
          <input
            name="referralId"
            value={state.referralId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Signup;
