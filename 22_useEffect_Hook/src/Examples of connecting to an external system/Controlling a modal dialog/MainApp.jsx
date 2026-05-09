import { useState } from "react";
import ModalDialog from "./ModalDialog.jsx";

const MainAPP = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Open Dialog
      </button>

      <ModalDialog isOpen={show}>
        {" "}
        HELLO THERE!
        <br />
        <button onClick={() => setShow(false)}>Close</button>
      </ModalDialog>
    </>
  );
};

export default MainAPP;
