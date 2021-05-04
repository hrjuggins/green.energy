import React, { useState } from "react";

const App = () => {
  const [formState, setFormState] = useState({ email: "", remember: false });

  const handleInputChange = e => {
    if (e.target.type === "checkbox") {
      setFormState(prevState => ({
        ...prevState,
        [e.target.name]: e.target.checked
      }));
    } else {
      setFormState(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
      }));
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    alert(`Welcome ${formState.email}!`);
  };

  return (
    <div className="container">
      <img src="https://green.cdn.energy/branding/logo-r.svg" />
      <h1>Operations studio</h1>
      <p>Please enter your email below</p>
      <form className="form" onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={formState.email}
          required={"required"}
        />
        <input
          type="checkbox"
          name="remember"
          onChange={handleInputChange}
          checked={formState.remember}
          className="checkbox"
          id="remember"
        />
        <label htmlFor="remember">Remember this device</label>
        <button className="button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default App;
