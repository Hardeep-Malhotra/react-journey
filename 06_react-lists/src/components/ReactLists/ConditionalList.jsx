const ConditionalList = () => {
  const user = [
    {
      id: 1,
      name: "Hardeep Singh",
      age: "22",
    },
    {
      id: 2,
      name: "Himanshu Garag",
      age: "13",
    },
  ];

  return (
    <>
      <h2>ConditionalList</h2>

      {user.map((user) =>
        user.age >= 18 ? (
          <li key={user.id}>{user.name} is Adult</li>
        ) : (
          <li key={user.id}>{user.name} is Minor</li>
        ),
      )}
    </>
  );
};

export default ConditionalList;