let customers = [];
const capacity = 25;
let seatsLeft = 25;

const countRef = React.createRef();
const nameRef = React.createRef();
const numberRef = React.createRef();

// Create form submit handler here
const submitHandler = (event) => {
  event.preventDefault();

  const count = parseInt(countRef.current.value);
  const name = nameRef.current.value;
  const phone = numberRef.current.value;
  //   Check for seats Count...
  if (count > seatsLeft) {
    alert(`Not enough available seats! Only ${seatsLeft} left.`);
    return;
  }

  // Check for duplicate entries
  const existingCustomer = customers.find((customer) => customer.name === name);
  if (existingCustomer) {
    alert("Customer already exists");
    return;
  }

  const custObj = {
    count: count,
    name: name,
    phone: phone,
    checkInTime: new Date().toLocaleTimeString(),
    checkOutTime: "-",
  };
  customers.push(custObj);
  seatsLeft -= count; // Decrease seatsLeft count
  countRef.current.value = ""; // Reset input fields
  nameRef.current.value = "";
  numberRef.current.value = "";
  rootElement.render(<App />);
};

// Checkout Handler for checkingOut a customer...
const checkOutHandler = (index) => {
  customers[index].checkOutTime = new Date().toLocaleTimeString();
  seatsLeft += customers[index].count; // Increase seatsLeft count
  rootElement.render(<App />);
};

// Delete Handler for deleting a customer from entry table...
const deleteHandler = (index) => {
  if (customers[index].checkOutTime === "-") {
    seatsLeft += customers[index].count; // Increase seatsLeft count if not checked out
  }
  customers.splice(index, 1); // Remove the customer entry from the array
  rootElement.render(<App />);
};

const App = () => (
  <div className="App" style={{ textAlign: "center" }}>
    <div>
      <h2>Total Capacity: {capacity}</h2>
      <h2>Seats Left: {seatsLeft}</h2>
    </div>

    {/* Create a form here */}
    <form onSubmit={submitHandler}>
      <input type="number" placeholder="Guest Count" ref={countRef} />
      <input type="text" placeholder="Primary Guest Name" ref={nameRef} />
      <input type="text" placeholder="Phone Number" ref={numberRef} />
      <button type="submit">Add Entry</button>
    </form>

    {/* Complete table to show records of customers */}
    <table border="1px" style={{ margin: "auto" }}>
      <thead>
        <tr>
          <th>Count</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Status</th>
          <th>Remove Entry</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => (
          <tr key={index}>
            <th>{customer.count}</th>
            <th>{customer.name}</th>
            <th>{customer.phone}</th>
            <th>{customer.checkInTime}</th>
            <th>{customer.checkOutTime}</th>
            <th>
              <button onClick={() => checkOutHandler(index)}>
                Click To Check Out
              </button>
            </th>
            <th>
              <button onClick={() => deleteHandler(index)}>Delete</button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
