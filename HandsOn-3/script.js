const App = () => {
  //   const arr = [2, 3, 2, 2, 1, 4];
  //   const obj = {
  //     name: "SGsubu",
  //     age: "22",
  //   };

  //   return (
  //     <>
  //       <h1>Arrays and Objects in JSX....</h1>
  //       {arr.map((num) => (
  //         <h2>{num}</h2>
  //       ))}
  //     </>
  //   );

  // ----------------------------------------------
  //   const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //   const filterNo = numbers.filter((number) => {
  //     return number % 2 == 0;
  //   });

  //   return (
  //     <>
  //       <h1>ES6 Array Iteration Methods</h1>
  //       {/* iterate over array here */}
  //       {filterNo.map((num) => (
  //         <h3>{num}</h3>
  //       ))}
  //     </>
  //   );
  const cars = [
    "Mercedez",
    "Bmw",
    "RR",
    "Dodge",
    "Ford",
    "Cadillac",
    "Lincoln",
  ];

  return (
    <>
      <h1>The unordered car lists are :</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>
    </>
  );
};

const rootElem = ReactDOM.createRoot(document.getElementById("root"));
rootElem.render(<App />);
