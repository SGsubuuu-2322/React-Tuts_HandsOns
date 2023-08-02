let jsxExp = <h2>This is a JSX Expression...</h2>;
const App = () => {
  let name = "Falak";
  let demo = null;
  return (
    <>
      <h1>Starting with Jsx with {name} ma'am...</h1>
      <p>This is {demo}...</p>
      <p>And calling a JS-function in JSX resolved to be : {sum(2, 3)} </p>
      {jsxExp}
    </>
  );

  //----------------------------------------------------------
  // create variable to store fahrenheit here
  //   var f = 12;

  // create function to convert into celsius here
  //   function tempConv(f) {
  //     var res = ((f - 32) * 5) / 9;
  //     return res;
  //   }

  //   return (
  //     <>
  //       {/* display data here */}
  //       <h1>Temperature Converter</h1>
  //       <p>Temperature in fahrenheit: {f}</p>
  //       <p>Temperature in celsius: {tempConv(f)}</p>
  //     </>
  //   );
  //   ----------------------------------------------------
};

function sum(a, b) {
  return a + b;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
