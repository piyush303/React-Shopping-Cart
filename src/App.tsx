import { useState } from "react";
import "./App.css";
import Cart from "./components/cart";
import ProductsList from "./components/products-list";
import { PRODUCTS } from "./data";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCard = (product) => {
    console.log({ product });
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="shopping-cart">
      <ProductsList products={PRODUCTS} addToCart={handleAddToCard} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
