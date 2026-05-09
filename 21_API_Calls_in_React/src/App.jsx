// Calling API in  React is a common task, and there are several ways to do it. One of the most popular methods is using the `fetch` API, which is built into modern browsers. Another popular library for making API calls in React is `axios`, which provides a more powerful and flexible way to handle HTTP requests.

import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);

  // Here’s a simple example of how to make an API call using the `fetch` API in a React component:

  // async function fetchData() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");

  //   const data = await response.json();

  //   console.log(data);
  // }

  //====================================================================================================

  //Calling API using Axios in React is also straightforward. First, you need to install the `axios` library using npm .
  // npm install axios

  // Then, you can use it in your React component like this:

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");

    setData(response.data);
    console.log(response.data);
  };

  return (
    <div>
      {/* <button onClick={fetchData}>Call To API By Using Fetch Method</button> */}
      <button onClick={getData}>Call To API By Using Axios Method</button>

      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.author}</h3>
              <img src={item.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
