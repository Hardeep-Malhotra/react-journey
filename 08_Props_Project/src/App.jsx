import React from "react";

import "./index.css";
import Card from "./components/Card";
import ProductPage from "./ProductPage";

export default function App() {
  const jobs = [
    {
      id: 1,
      company: "Amazon",
      role: "Senior UI/UX Designer",
      type: "Part Time",
      level: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India",
      posted: "5 days ago",
      img: "https://tse1.mm.bing.net/th/id/OIP.mfjIDgZfzL5i-BViz7SCnwHaD4?w=283&h=180",
    },
    {
      id: 2,
      company: "Google",
      role: "Frontend Developer",
      type: "Full Time",
      level: "Mid Level",
      salary: "$100/hr",
      location: "Bangalore, India",
      posted: "2 days ago",
      img: "data:image/webp;base64,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",
    },
    {
      id: 3,
      company: "Microsoft",
      role: "Backend Developer",
      type: "Full Time",
      level: "Junior",
      salary: "$90/hr",
      location: "Hyderabad, India",
      posted: "1 day ago",
      img: "https://tse3.mm.bing.net/th/id/OIP.e4t3ZRjVBJcVh8_LwT9e7wHaDt?w=347&h=175&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      id: 4,
      company: "Cogizant",
      role: "UI/UX",
      type: "Hybird",
      level: "entry level",
      salary: "$100/hr",
      location: "Banglore, India",
      posted: "3 day ago",
      img: "https://tse2.mm.bing.net/th/id/OIP.DkYthHC1GEOQ55xtC8lBEwHaHa?w=168&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      id: 5,
      company: "Netflix",
      role: "Product Designer",
      type: "Full Time",
      level: "Senior Level",
      salary: "$140/hr",
      location: "Remote",
      posted: "1 week ago",
      img: "data:image/webp;base64,UklGRoICAABXRUJQVlA4IHYCAABQIACdASobAeoAPp1OpE0lpSOiIxrYILATiWdu4XSZv++h97uQDM3mze+b+5aM/zMfrN+le/Adcz6DvTE5EuGX+/M+/M+/M+/M+/M+/M+/M+/M+/M+/M+/M+/M9kOQ5sHZsHWWNCmP08NXDZ56G6sDtGn99u8KUecty/Htd7Wppdui0X7RxiIiB7PvzPvzPU8ZZMrvoj3M+t2l6Pul4xXhSBW3AB61aVFLMvOtn35n35nr3EgSDnUCqoRyVQ5N6YjmffmfbnHsuMVEDY8n4n5hFcThSjzlxqoq+SVwxDvZcRp3pMBQTlLhuxsHZsHZsHZsHZsHZsHZsHZsHZsHZsHZsHZsHZsHZsHZr/gA/v9STrTwAIniT5srfCMT0DsU2HD0pEfdOoHfwJilZju8vrawq83/TlW+tRvWy1dp5HUsfN4aOPRJqnrkdQc/Semr4rmyxADvdFsKboW1VSPvI3JjNdRazkZQlB/yHG25ihyBbU0fZa3SF27/VZ1L4jwexDAJeAGZfnZZkOejv0vH9eaJPTOTjHIRAHsgUH6UZ0AWCBmC5r6G0h2N6obxKUXEd3x1nr85S8J1Rp6boQN6Qsb7BHLz1CQPQoRo7R8Ci4upU7j2edhNkhMg9jRkoKhb6nEzjYJ9IdAdjPoTuuHDtyvAm9lxGwn+BmX74P5Qo/AZXcF8TPLTtIxwrLNGvTtdK7EWgDLKZCfGBak7aL9wpIHZMn/ZrQbDO+k5cLhcmTUW1rssRVS/2B4tMYVd4ok2OHgIlM8Ulk86TUSqjzWOvfwRj2XeecaFX3tXZHz04rVRkjwtHF5rEeDfwzxnq0vZmR0AAAAAAAA=",
    },
    {
      id: 6,
      company: "Adobe",
      role: "UI Designer",
      type: "Part Time",
      level: "Mid Level",
      salary: "$110/hr",
      location: "Noida, India",
      posted: "4 days ago",
      img: "https://tse3.mm.bing.net/th/id/OIP.Cat69vJTP8Vp_yYhPDizvgHaJa?w=138&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      id: 7,
      company: "Meta",
      role: "Frontend Engineer",
      type: "Full Time",
      level: "Senior Level",
      salary: "$150/hr",
      location: "Gurgaon, India",
      posted: "2 days ago",
      img: "https://tse3.mm.bing.net/th/id/OIP.0Y8Hmr7KiAI_InrwDPpj9wHaHI?w=188&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      id: 8,
      company: "TCS",
      role: "Software Developer",
      type: "Full Time",
      level: "Entry Level",
      salary: "$60/hr",
      location: "Pune, India",
      posted: "6 days ago",
      img: "https://tse2.mm.bing.net/th/id/OIP.nDdw9cc1ll-HMlptuvsSPwHaHa?w=148&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
  ];

  console.log(jobs);

  return (
    <div className="parent">
      {/* {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))} */}
      <ProductPage />
    </div>
  );
}
