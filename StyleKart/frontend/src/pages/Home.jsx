import Banneer from "../Components/Banneer";
import ProductCard from "../Components/ProductCard";
import products from "../data/products";
import "../App.css";

function Home() {
  return (
    <div>
      <Banneer />

      <div className="slider">
        <div className="track">
          <div className="products">
            {[...products, ...products].map((item, i) => (
              <ProductCard
                key={i}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
       <div className="brand-center">
      <h1>Velouré</h1>
      <p>Premiun Streetwear</p>
       </div>
    </div>
  );
}

export default Home;
