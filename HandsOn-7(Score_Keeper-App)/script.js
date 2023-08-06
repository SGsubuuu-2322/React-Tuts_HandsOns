let score = 0,
  wicket = 0,
  hit = 0;

const inputRef = React.createRef();

let ballWiseRslts = [];

const addScore = (num) => {
  hit = num;
  reactElem.render(<App />);
};
const addWicket = () => {
  hit = "W";
  reactElem.render(<App />);
};

const ScoreBtns = () => (
  <div className="btns">
    <button onClick={() => addScore(0)}>0</button>
    <button onClick={() => addScore(1)}>1</button>
    <button onClick={() => addScore(2)}>2</button>
    <button onClick={() => addScore(3)}>3</button>
    <button onClick={() => addScore(4)}>4</button>
    <button onClick={() => addScore(5)}>5</button>
    <button onClick={() => addScore(6)}>6</button>
    <button onClick={addWicket}>Wicket</button>
  </div>
);

const ShowBallWiseResult = () => (
  <>
    {ballWiseRslts.map((result, index) => (
      <>
        {index % 6 === 0 ? <br /> : null}
        <span key={index}>{result === 0 ? <strong>.</strong> : result}</span>
        &nbsp;&nbsp;
      </>
    ))}
  </>
);

const submitEvent = (event) => {
  event.preventDefault();
  if (hit == "W" && wicket < 10) {
    wicket++;
  } else if (wicket < 10) {
    score += hit;
  }
  ballWiseRslts.unshift(
    // <span>
    //   {hit}
    //   {","}
    //   {inputRef.current.value}
    // </span>
    <span>{`${hit}, ${inputRef.current.value}`}</span>
  );

  hit = 0;
  inputRef.current.value = "";
  reactElem.render(<App />);
};

const Form = () => (
  <form onSubmit={submitEvent}>
    <input value={hit} />
    <input type="text" placeholder="Add a comment" ref={inputRef} />
    <button>Submit</button>
  </form>
);

const App = () => (
  <>
    <h1>Score_Keeper-App</h1>
    <h3>
      Score: {score}/{wicket}
      <ScoreBtns />
      <br />
      <Form />
      <hr />
      {ballWiseRslts.map((res, index) => (
        <p key={index}>{res}</p>
      ))}
    </h3>
  </>
);

const reactElem = ReactDOM.createRoot(document.getElementById("root"));
reactElem.render(<App />);
