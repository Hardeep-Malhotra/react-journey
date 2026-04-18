import React from "react";
import ProductInfo from "./ProductComponents/ProductInfo";
import ActionButton from "./ProductComponents/ActionButton";

export default function ProductPage() {
  const productData = {
    name: "Apple iphone 17",
    cost: 79990,
    stars: 4.8,
  };
  return (
    <div
      className="container"
      style={{ padding: "20px", border: "1px solid #ccc" }}
    >
      <ProductInfo
        title={productData.name}
        cost={productData.cost}
        rating={productData.stars}
      />

      <div
        className="actions"
        style={{ marginTop: "10px", display: "flex", gap: "10px" }}
      >
        <ActionButton label="Add to Cart" color="orange" />
        <ActionButton label="Buy Now" color="red" />
      </div>
    </div>
  );
}
