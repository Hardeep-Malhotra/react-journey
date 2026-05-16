import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Harder/Header";
import Footer from "./component/Footer/Footer";

function layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default layout;
