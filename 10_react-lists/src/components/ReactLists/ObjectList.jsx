const ObjectList = () => {
  const user = [
    {
      id: 1,
      name: "Hardeep Singh",
      age: "22",
    },
    {
      id: 2,
      name: "Himanshu Garag",
      age: "23",
    },
  ];

  return (
    <>
      <h2>Object List</h2>;
      {user.map((user) => (
        <li key={user.id}>
          {user.name} is {user.age} years old
        </li>
      ))}
    </>
  );
};

export default ObjectList;
