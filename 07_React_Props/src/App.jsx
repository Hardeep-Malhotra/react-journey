import React from "react";
import Props_Example_With_Card from "./Component/Props_Example_With_Card";
export default function App() {
  return (
    <div className="Parent">
      <Props_Example_With_Card
        img="https://hardeep-singh.vercel.app/assets/profile2-D3wmaOa1.png"
        h1="Hardeep Singh"
        p="I am SoftWare Engineer"
      />
      <Props_Example_With_Card
        img="https://www.bing.com/ck/a?!&&p=dcff93e671d69b58d0c83257a8905272f506ccdbb0da85dfaf734dcb8a3772c5JmltdHM9MTc3NjI5NzYwMA&ptn=3&ver=2&hsh=4&fclid=32e7a885-34b8-6838-268c-be9a35be69b6&u=a1L2ltYWdlcy9zZWFyY2g_cT1naXJsK2ltYWdlJmlkPTUwQUQ5Q0MwQjRCQUZBMTAwQzJBQTAxOTdCMEFDNUFFQTY3MzA3REUmRk9STT1JUUZSQkE"
        h1="Bhumika Gaba"
        p="I am Backend Engineer"
      />
      <Props_Example_With_Card
        img="https://tse3.mm.bing.net/th/id/OIP.AnntpZUTEW2ifGoBsHrdhQHasJ4?w=125&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        h1="Jassbir Singh"
        p="I am  Accontant"
      />
    </div>
  );
}
