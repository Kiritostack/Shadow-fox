import ProductCard from "../Components/ProductCard";
import products from "../data/products";

function Kids() {
  const kidsProducts = products.filter(p => p.category === "kids");

  return (
    <div className="products">
      {kidsProducts.map(item => (
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

export default Kids;
