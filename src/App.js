import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [isCartShow, setIsCartShow] = useState(false)

  const showCartHandler = () => {
    setIsCartShow(true)
  }
  
  const hideCartHandler = () => {
    setIsCartShow(false)
  }

  return (
    <CartProvider>
      {isCartShow && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
