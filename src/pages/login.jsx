import React from "react";
import { useState } from "react";
import { login } from "../services/auth";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    try {
      const data = await login({ email, password });
      if (data.status) {
      } else {
        setError(data.message.login_id);
      }
    } catch (err) {
      console.log("errMessage:", err.message);
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <h2>Login</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="email" value={state.email} onChange={handleChange} />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
