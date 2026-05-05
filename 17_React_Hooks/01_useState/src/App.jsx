import React from "react";
import Counter from "./Basic useState examples/Counter";
import Text_Field from "./Basic useState examples/Text_Field";
import { Checkbox } from "./Basic useState examples/Checkbox";
import Form from "./Basic useState examples/Form";

export const App = () => {
  return (
    <div>
      <h1>Basic useState examples</h1>
      <Counter />
      <Text_Field />
      <Checkbox />
      <Form />
    </div>
  );
};
export default App;
