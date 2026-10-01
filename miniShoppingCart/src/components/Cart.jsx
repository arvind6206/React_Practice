import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 p-8">

      <div className="max-w-4xl mx-auto">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-3xl font-bold">
            Shopping Cart
          </h2>

          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
          )}

        </div>

        {cart.length === 0 ? (

          <div className="bg-white p-8 rounded-lg text-center">
            <p className="text-gray-500 text-lg">
              Your cart is empty.
            </p>
          </div>

        ) : (

          <div className="space-y-4">

            {cart.map((item) => (

              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
              >

                <div>
                  <h3 className="text-xl font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-gray-600">
                    ₹{item.price}
                  </p>
                </div>

                <div className="flex items-center gap-3">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                    className="bg-gray-200 px-3 py-1 rounded"
                  >
                    -
                  </button>

                  <span className="font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                    className="bg-gray-200 px-3 py-1 rounded"
                  >
                    +
                  </button>

                </div>

                <p className="font-semibold">
                  ₹{item.price * item.quantity}
                </p>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="text-red-500"
                >
                  Remove
                </button>

              </div>

            ))}

            <div className="bg-white p-6 rounded-lg shadow text-right">

              <h3 className="text-2xl font-bold">
                Total: ₹{totalPrice}
              </h3>

            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default Cart;