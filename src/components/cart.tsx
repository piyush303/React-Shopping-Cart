export default function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h3>Cart - {cartItems.length}</h3>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} width="25px" />
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
