import React, { useState } from "react";
export const Form_Nested_Object = () => {
  const [person, setPerson] = useState({
    name: "Batman",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://images8.alphacoders.com/113/thumb-1920-1130536.jpg",
    },
  });

  const handleNameChange = (e) => {
    setPerson({
      ...person,
      name: e.target.value,
    });
  };

  const handletitleChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  };
  const handleCityChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  };
  const handleImageChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        Image: e.target.value,
      },
    });
  };
  return (
    <div>
      <h1>Example 2 of 4: Form (nested object) </h1>
      <label>
        <input type="text" value={person.name} onChange={handleNameChange} />
        Name : {""}
      </label>

      <br />
      <br />
      <label>
        <input
          type="text"
          value={person.artwork.title}
          onChange={handletitleChange}
        />
        title : {""}
      </label>

      <br />
      <br />
      <label>
        <input
          type="text"
          value={person.artwork.city}
          onChange={handleCityChange}
        />
        City : {""}
      </label>

      <br />
      <br />
      <label>
        <input
          type="text"
          value={person.artwork.Image}
          onChange={handleImageChange}
        />
        Image : {""}
      </label>

      <br />
      <br />

      <p>
        {person.name} <br />
        <br />
        {person.artwork.title} <br />
        <br />
        {person.artwork.city} <br />
        <br />
        {person.artwork.image} <br />
        <br />
      </p>
    </div>
  );
};
