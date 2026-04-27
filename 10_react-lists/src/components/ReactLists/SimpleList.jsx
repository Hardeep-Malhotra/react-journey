const SimpleList = () => {
  const fruits = ["mango", "Banana", "Apple"];

  return (
    <>
      <h2>Fruite Lists</h2>
      {fruits.map((fruits, index) => (
        <li key={index}>{fruits}</li>
      ))}
    </>
  );
};

export default SimpleList;
