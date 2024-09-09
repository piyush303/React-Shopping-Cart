import ProductItem from "./product-item";
import "./products-list.css";

export default function ProductsList({ products, addToCart }) {
  return (
    <div className="product-list-wrapper">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}
