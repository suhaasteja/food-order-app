import React, { useState } from "react";
import { Cart } from "./Components/Cart/Cart";
import { Header } from "./Components/Layout/Header";
import { Meals } from "./Components/Meals/Meals";
import { CartProvider } from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart = {hideCartHandler}/>}
      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
