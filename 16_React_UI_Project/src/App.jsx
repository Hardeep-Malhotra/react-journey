import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

export default function App() {
  const users = [
    {
      img: "https://i.pinimg.com/736x/f6/61/ea/f661ea61616909838a9fbfeda0d2ea14.jpg",
      intro:
        "This is a satisfied customer who has benefited greatly from our services.",
      tag: "Satisfied",
      index: 1,
    },
    {
      img: "https://i.pinimg.com/736x/7a/ea/08/7aea08c5323513c0a4c28ff5cb4d5d14.jpg",
      intro:
        "This is an underserved customer who has not had access to traditional banking services.",
      tag: "Underserved",
      index: 2,
    },
    {
      img: "https://i.pinimg.com/1200x/52/09/f6/5209f6863f1e5a4e552bdbbc30bf20fb.jpg",
      intro:
        "This is an underbanked customer who has limited access to financial services.",
      tag: "Underbanked",
      index: 3,
    },
  ];

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
}
