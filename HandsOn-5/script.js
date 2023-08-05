const Cars = () => {
  const carDtls = [
    {
      id: "1",
      src: "https://www.carwale.com/news/2021-rollsroyce-ghost-black-badge-now-in-pictures/",
      name: "Rolls-Royce",
      model: "Ghost Black",
      price: "3.5cr",
    },
    {
      id: "2",
      src: "https://www.livemint.com/auto-news/mercedes-benz-launches-new-made-in-india-s-class-price-other-details-11633611166023.html",
      name: "Mercedez-Benz",
      model: "Maybach",
      price: "2.5cr",
    },
    {
      id: "3",
      src: "https://www.cartrade.com/bmw-cars/7-series/",
      name: "Bmw",
      model: "8-series",
      price: "2cr",
    },
    {
      id: "4",
      src: "https://www.lamborghini.com/en-en/models",
      name: "Lamborghini",
      model: "Sian-37",
      price: "5.5cr",
    },
  ];

  return (
    <>
      <h1>Car Details:</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Model</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {carDtls.map((car, id) => (
            <tr key={id}>
              <td>
                <img src={car.src} alt="car-img" />
              </td>
              <td>{car.name}</td>
              <td>{car.model}</td>
              <td>{car.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Items = () => {
  const itemsSold = [
    { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
    { id: 2, name: "iPad Pro", price: 800, qty: 18 },
    { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
    { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
    { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 },
  ];

  return (
    <>
      <h1>Record of sold items</h1>
      <table border="1px">
        {/* iterate over data here */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Selling Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {itemsSold.map((item, id) => (
            <>
              <tr key={id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
              </tr>
            </>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Revenue</td>
            <td colspan="3">
              {itemsSold.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.price;
              }, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

const App = () => {
  //   let showCardtls = true;

  //   if (showCardtls) {
  //     return <Cars />;
  //   } else {
  //     return <Items />;
  //   }

  let login = true;
  let firstName = "SGsubu";
  let lastName = "";
  return (
    <>
      <h1>Hello {login ? lastName || firstName : "user!"}</h1>
    </>
  );
};

// const IMAGES = [
//   "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557549/assets/yannis-zaugg--7TB_r-NuMo-unsplash_tdmglm.jpg",
//   "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/lino-C2SzUyg3PPQ-unsplash_s8a4tg.jpg",
//   "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/curioso-photography-QfOhOcrDmvk-unsplash_vgbb3t.jpg",
//   "https://res.cloudinary.com/dl26pbek4/image/upload/v1674620718/assets/pexels-garvin-st-villier-3311574_ds8wrh.jpg",
// ];

// const Login = () => (
//   <div>
//     <h3>Login to Continue</h3>
//     <form>
//       <input placeholder="email" />
//       <input placeholder="password" />
//       <button>Login</button>
//     </form>
//   </div>
// );

// const Home = () => (
//   <div>
//     <h3>Welcome to home!</h3>
//     <h5>Enjoy this catalog of pictures</h5>
//     {IMAGES.map((i) => (
//       <img key={i} src={i} />
//     ))}
//   </div>
// );

// // create premium account component here
// const Premium = () => <button>Buy Premium</button>;

// const App = () => {
//   // create login status and name variable here
//   let login = true;
//   let name = "John Doe";

//   return (
//     <>
//       {/* render data here */}
//       <h1>Hello {login ? name : "Guest"}!</h1>
//       {login ? (
//         <>
//           <Premium /> <h3>Welcome to home!</h3>{" "}
//           <h4>Enjoy this catalog of pictures</h4>
//           {IMAGES.map((img) => (
//             <img alt="" width={"20%"} height={"auto"} src={img} />
//           ))}
//         </>
//       ) : (
//         <Login />
//       )}
//     </>
//   );
// };

const reactElem = ReactDOM.createRoot(document.getElementById("root"));
reactElem.render(<App />);
