import Banneer from "./Components/Banneer";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import products from "./data/products";
import "./App.css"
function app(){
return (
  <div>
    <Navbar/>
    <Banneer/>
    <div className="products">
      {products.map((item)=>(
      <ProductCard 
      key={item.id}
      name={item.name}
      price={item.price}
      image={item.image}/>))}
    </div>
  <h1>Velouré</h1>
<p>Premiun Streetwear</p>
  </div>
);
}
export default app;