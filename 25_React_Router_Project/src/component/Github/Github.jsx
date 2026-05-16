import React, { useEffect, useState } from "react";

function Github() {
  const [userdata, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://api.github.com/users/Hardeep-cloud16")
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
        });
    };

    setUserData(fetchData);
  }, []);
  return (
    <div>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github UserName: {userdata.login}
        <img src={userdata.avatar_url} alt="Git picture" width={300} />
      </div>
    </div>
  );
}

export default Github;
