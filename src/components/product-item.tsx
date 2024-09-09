import "./product-item.css";

export default function ProductItem({ product, addToCart }) {
  return (
    <>
      <div className="product-card">
        <div className="image">
          <img src={product.image} />
        </div>

        <div>{product.title}</div>

        <button type="button" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </>
  );
}
