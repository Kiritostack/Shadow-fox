import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0)
    return <h2 style={{ padding: "40px" }}>Cart is empty</h2>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Your Cart</h1>

      {cart.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <img src={item.image} width="80" />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>

          <button onClick={() => removeFromCart(index)}>
            Remove
          </button>
          <button
  onClick={() => {
    alert("Order Placed Successfully!");
    localStorage.removeItem("cart");
    window.location.reload();
  }}
>
  Checkout
</button>

        </div>
      ))}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default Cart;
