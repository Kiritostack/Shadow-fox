import Banneer from "./Components/Banneer";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
function app(){
return (
  <div>
    <Navbar/>
    <Banneer/>
    <div className="Product">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>

    </div>
  <h1>Velouré</h1>
<p>Premiun Streetwear</p>
  </div>
);
}
export default app;