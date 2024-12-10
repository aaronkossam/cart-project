import React from "react";
import { CartContext } from "../component/context/CartContextProvider";

export function useCart() {
    const context = React.useContext(CartContext);
    if (context === undefined) {
      throw new Error("useCart must be used within a CartContextProvider");
    }
    return context;
  }