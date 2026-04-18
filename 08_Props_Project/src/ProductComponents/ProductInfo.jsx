import React from "react";

export default function ProductInfo({ title, rating, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Ratting : {rating}</p>
      <h3 style={{ color: "green" }}>₹{price}</h3>
    </div>
  );
}
