// This is Vanilla Js. code...
// const div = document.createElement("div");
// const h1 = document.createElement("h1");
// h1.className = "header";
// h1.textContent = "Hello React!!!";
// div.append(h1);
// document.getElementById("root").append(div);

// Now its time to replace it with React code...
// const reactHeading = React.createElement(
//   "h1",
//   { className: "header", id: "react-header" },
//   "Hello React!!!"
// );
// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

// Write your React code here
// const img = React.createElement("img", {
//   className: "img",
//   src: "https://files.codingninjas.in/coding-ninjas-24647.png",
// });
// ReactDOM.createRoot(document.getElementById("root")).render(img);

// Now its time to write the React code with JSX :-

// const jsxHeading = (
//   <>
//     <h1 id="react-header" className="header">
//       Let's have a look on some awesome features about React!!!
//     </h1>
//     <ul id="lists">
//       <li>React is a kind of "Declarative Programming" approach</li>
//       <li>React is Compossible</li>
//       <li>React can be written using JSX which syntatic sugar for js...</li>
//     </ul>
//   </>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);

// Now its time to write the react code with the help of react functional components...

const Name = () => (
  <>
    <h1>JSX is Javascript with XML</h1>
    <p>And, it is compiled using Babel compiler...</p>
  </>
);

const App = () => (
  //JSX Code
  <>
    <h1 id="react-header" className="header">
      Let's have a look on some awesome features about React!!!
    </h1>
    <ul id="lists">
      <li>React is a kind of "Declarative Programming" approach</li>
      <li>React is Compossible</li>
      <li>React can be written using JSX which syntatic sugar for js...</li>
    </ul>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Name />
  </>
);
