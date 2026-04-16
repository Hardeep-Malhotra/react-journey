import React from "react";
import "../index.css";
export default function Props_Example_With_Card(props) {
  return (
    <div className="card">
      <img src={props.img} />
      <h1>{props.h1}</h1>
      <p>{props.p}</p>
      <button>View Profile</button>
    </div>
  );
}
