import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import { BakeryItem } from "./components/BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  //make a hashmap that represents cart, state.
  const [cart, setCart] = useState(new Map())
  //make a state for totalCost
  const [totalCost, setTotalCost] = useState(0)


  //AddToCart function
  const addToCart = (itemPrice, itemName) => { // remove 
    setTotalCost(totalCost + itemPrice);
    console.log(cart);
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[itemName] = (newCart[itemName] || 0) + 1;
      return newCart
    });
  }



  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div className="Body">
        <div className="ItemArea">
          {bakeryData.map((item) => ( // map bakeryData to BakeryItem components
            <BakeryItem item={item} addToCart={addToCart} />
            // replace with BakeryItem component
          ))}
        </div>
        <div className="Cart Area">
          <h2>Cart</h2>
          Total cost: {totalCost}
          <h3>Items</h3>
          {console.log(cart)}
          {/* {cart.forEach((value, key, map) => <div>{value} + {key}</div>)} */}
          {cart.size == 0 ? null : Object.entries(cart).map(([key, value]) => <div>{key}, {value}</div>)}


        </div>
      </div>



    </div>
  );
}

export default App;
