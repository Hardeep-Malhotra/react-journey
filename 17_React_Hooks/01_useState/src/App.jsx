import React from "react";
import Counter from "./Basic useState examples/Counter";
import Text_Field from "./Basic useState examples/Text_Field";
import { Checkbox } from "./Basic useState examples/Checkbox";
import Form from "./Basic useState examples/Form";
import { Passing_the_updater_function } from "./The difference between passing an updater and passing the next state directly/Passing_the_updater_function";
import { Passing_the_next_state_directly } from "./The difference between passing an updater and passing the next state directly/Passing_the_next_state_directly";
import { Form_Object } from "./Examples of objects and arrays in state/Form_Object";

export const App = () => {
  return (
    <div>
      <h1>Basic useState examples</h1>
      <Counter />
      <Text_Field />
      <Checkbox />
      <Form />

      <h1>
        The difference between passing an updater and passing the next state
        directly
      </h1>
      <Passing_the_updater_function />
      <Passing_the_next_state_directly />

      <h1>Examples of objects and arrays in state</h1>
      <Form_Object />
    </div>
  );
};
export default App;
