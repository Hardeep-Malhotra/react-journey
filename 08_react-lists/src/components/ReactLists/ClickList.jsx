const ClickList = () => {
  const companies = ["Google", "Microsoft", "Amazone"];

  const handleClick = (company) => {
    alert(`You clicked ${company}`);
  };

  return (
    <>
      <h2>Click List</h2>

      {companies.map((company, index) => (
        <button
          key={index}
          onClick={() => handleClick(company)}
          style={{ margin: "5px" }}
        >
          {company}
        </button>
      ))}
    </>
  );
};

export default ClickList;
