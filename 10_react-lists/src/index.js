import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SimpleList from "./components/ReactLists/SimpleList";
import ObjectList from "./components/ReactLists/ObjectList";
import ConditionalList from "./components/ReactLists/ConditionalList";
import ClickList from "./components/ReactLists/ClickList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SimpleList />
    <ObjectList />
    <ConditionalList />
    <ClickList />
  </React.StrictMode>,
);
