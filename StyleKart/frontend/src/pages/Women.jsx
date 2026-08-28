import ProductCard from "../Components/ProductCard";
import products from "../data/products";

function Women() {
  const womenProducts = products.filter(p => p.category === "Women");

  return (
    <div className="products">
      {womenProducts.map(item => (
        <ProductCard
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default Women;
