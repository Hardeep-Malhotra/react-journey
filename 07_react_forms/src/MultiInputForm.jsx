import React, { useState } from "react";

function MultiInputForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      username: "gfg123",
      email: "abc@gfg.org",
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        <label>Enter Username: </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <br /><br />

        <label>Enter Email: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <br />

      <div>Entered Username: {formData.username}</div>
      <div>Entered Email: {formData.email}</div>
    </div>
  );
}

export default MultiInputForm;
