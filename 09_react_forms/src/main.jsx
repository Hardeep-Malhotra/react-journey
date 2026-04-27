import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FormExample from "./FormExample";
import FormConsole from "./FormConsole";
import ControlledForm from "./ControlledForm";
import SubmitControlledForm from "./SubmitControlledForm";
import MultiInputForm from "./MultiInputForm";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <FormExample /> */}
    {/* <FormConsole/> */}
    {/* <ControlledForm/> */}
    {/* <SubmitControlledForm /> */}

    <MultiInputForm/>
  </StrictMode>,
);
