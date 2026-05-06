import React, { useState } from "react";

export const Form_Object = () => {
  const [form, setForm] = useState({
    firstName: "Hardeep",
    lastName: "Singh",
    email: "hardeep@microsoft.com",
  });
  return (
    <div>
      <h1>Example 1 of 4: Form (object) </h1>

      <label>
        <input
          type="text"
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
        FirstName :{" "}
      </label>
      <br />
      <br />
      <label>
        <input
          type="text"
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />{" "}
        lastName:{" "}
      </label>
      <br />
      <br />
      <label>
        {" "}
        <input
          type="text"
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>
      <br />
      <br />

      <p>
        {form.firstName} <br /> {form.lastName} <br /> {form.email}
      </p>
    </div>
  );
};
