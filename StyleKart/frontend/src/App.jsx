import Banneer from "./Components/Banneer";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import products from "./data/products";
import "./App.css";
function app(){
return (
  <div>
    <Navbar/>
    <Banneer/>
    <div className="slider">
 <div className="track">
    <div className="products">
      {[...products, ...products].map((item, i) => (
        <ProductCard
          key={i}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
        </div>
      </div>
  <h1>Velouré</h1>
<p>Premiun Streetwear</p>
  </div>
);
}
export default app;