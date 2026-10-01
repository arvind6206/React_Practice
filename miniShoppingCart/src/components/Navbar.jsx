import React from "react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        My Store
      </h1>

      <div className="text-lg">
        🛒 Cart ({totalItems})
      </div>
    </nav>
  );
};

export default Navbar;