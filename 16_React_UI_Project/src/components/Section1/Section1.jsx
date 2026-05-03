import React from "react";
import { Navbar } from "./Navbar";
import { Page1Content } from "./Page1Content";

export default function Section1(props) {
  return (
    <div>
      <Navbar />
      <Page1Content users={props.users} />
    </div>
  );
}
