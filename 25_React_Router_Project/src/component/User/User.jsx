import React from "react";
import { useParams } from "react-router-dom";

function User() {
  // Destructures the 'userid' from the URL path
  const { userid } = useParams();

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h1 className="text-xl font-bold">User Profile</h1>
      <p>
        Viewing ID: <span className="text-blue-600">{userid}</span>
      </p>
    </div>
  );
}

export default User;
