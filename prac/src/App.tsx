import { useState } from "react";

const App = () => {
  const [product, setProduct] = useState({
    name: "Laptop",
    price: 25000,
    quantity: 1,
  });

  function handleDecrement() {
    setProduct((prev) => {
      if (prev.quantity <= 1) {
        return prev;
      }

      return {
        ...prev,
        quantity: prev.quantity - 1,
      };
    });
  }

  function handleIncrement() {
    setProduct((prev) => ({
      ...prev,
      quantity: prev.quantity + 1,
    }));
  }

  function handleRemove() {
    setProduct(null!);
  }

  if (!product) {
    return (
      <div>
        <h1>Product Manager</h1>
        <p>Product has been removed.</p>
      </div>
    );
  }

  const total = product.price * product.quantity;

  return (
    <div>
      <h1>Product Manager</h1>

      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>

      <button onClick={handleDecrement}>[-]</button>

      <span> {product.quantity} </span>

      <button onClick={handleIncrement}>[+]</button>

      <p>Total: ₹{total}</p>

      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default App;