const App = () => {
  const objArr = [
    {
      name: "Subham",
      age: "22",
      bg: "O+ve",
    },
    {
      name: "Gitanjali",
      age: "22",
      bg: "AB+ve",
    },
    {
      name: "SGshreyans",
      age: "-5",
      bg: "O+ve",
    },
  ];

  return (
    <>
      <h1>Person Details:</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>BloodGrp</th>
          </tr>
        </thead>
        <tbody>
          {objArr.map((obj, index) => (
            <tr key={index}>
              <td>{obj.name}</td>
              <td>{obj.age}</td>
              <td>{obj.bg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const reactElem = ReactDOM.createRoot(document.getElementById("root"));
reactElem.render(<App />);
