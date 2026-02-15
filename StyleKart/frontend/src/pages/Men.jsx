import ProductCard from "../Components/ProductCard";
import products from "../data/products";

function Men() {
  const menProducts = products.filter(p => p.category === "Men");

  return (
    <div className="products">
      {menProducts.map(item => (
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

export default Men;
