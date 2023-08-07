const nameRef = React.createRef();
const markRef = React.createRef();
let studentformarr = [];

const submitHandler = (event) => {
  event.preventDefault();
  const dtls = {
    name: nameRef.current.value,
    marks: markRef.current.value,
  };
  studentformarr.push(dtls);
  nameRef.current.value = "";
  markRef.current.value = null;
  rootElement.render(<App />);
};

const Form = () => (
  <>
    <h1>Student's Result Form: </h1>
    <form onSubmit={submitHandler}>
      <input type="text" ref={nameRef} />
      <input type="number" ref={markRef} />
      <button type="submit">Submit</button>
    </form>
  </>
);

const Result = () => (
  <>
    <h2>Student's Results: </h2>
    <table border="1px">
      <thead>
        <tr>
          <th>Student's name</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        {studentformarr.map((dtls, index) => (
          <tr key={index}>
            <th>{dtls.name}</th>
            <th>{dtls.marks}</th>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

const App = () => (
  <>
    <Form />
    <Result />
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
