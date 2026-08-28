import { useParams } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Product() {
  const { id } = useParams();
   console.log("URL id =", id);
console.log("Products =", products);

  const item = products.find(p => String(p.id) === id);

const { addToCart } = useContext(CartContext);

  if (!item) return <h2>Product not found</h2>;


  return (
    <div style={{ padding: "40px" }}>
      <img src={item.image} width="300" />
      <h1>{item.name}</h1>
      <h2>₹{item.price}</h2>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}

export default Product;
