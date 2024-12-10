import React from "react";
import { useState } from "react";

export const CartContext = React.createContext();

// eslint-disable-next-line react/prop-types
const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const check = cartItems.find((items) => items.id === item.id);
    console.log("item", check);

    if (check) {
      setCartItems((prev) => {
        const existingItem = prev.find((p) => p.id === check.id);
        if (existingItem) {
          return prev.map((p) =>
            p.id === check.id ? { ...p, count: p.count + 1 } : p
          );
        }
      });
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  // const removeFromCart = (item) => {
  //   const check = cartItems.find((items) => items.id === item.id);
  //   console.log("item", check);

  //   if (check) {
  //     setCartItems((prev) => {
  //       const existingItem = prev.find((p) => p.id === check.id);
  //       if (existingItem) {
  //         return prev.map((p) =>
  //           p.id === check.id ? { ...p, count: p.count - 1 } : p
  //         );
  //       }
  //     });
  //   } else {
  //     setCartItems((prevItems) => [...prevItems, item]);
  //   }
  // };

  const removeFromCart = (removingCart) => {
    const newCart = cartItems.filter((item) => item.id !== removingCart.id);
    setCartItems(newCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
