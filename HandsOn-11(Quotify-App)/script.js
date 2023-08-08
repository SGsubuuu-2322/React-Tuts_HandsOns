const quotes = [];
const nameRef = React.createRef();
const quoteRef = React.createRef();

const clearInputs = () => {
  nameRef.current.value = "";
  quoteRef.current.value = "";
};

const Form = () => (
  <>
    <form>
      <input type="text" ref={nameRef} onKeyDown={handleQuote} />
      <br />
      <br />
      <input type="text" ref={quoteRef} onKeyDown={handleQuote} />
    </form>
  </>
);

// create handleQuote function here
const handleQuote = (event) => {
  if (event.key === "Enter") {
    const newQouteObj = {
      name: nameRef.current.value,
      quote: quoteRef.current.value,
    };
    quotes.push(newQouteObj);
    clearInputs();
    rootElement.render(<App />);
  }
};

const App = () => (
  <div className="App">
    <h2>Quotify</h2>
    <Form />
    <br />
    <div className="quotes">
      {quotes.map((q, i) => (
        <div key={i}>
          <i>"{q.quote}"</i>
          <b>~ {q.name}</b>
        </div>
      ))}
    </div>
  </div>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
