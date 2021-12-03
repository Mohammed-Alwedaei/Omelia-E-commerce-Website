import CartItemCounter from "./CartItemCounter";
import "./styles/cart.css";

export default function CartItem({ image, alt, name, description, price }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <img src={image} alt={alt} />
        <div className="cart-item-desc">
          <h3>{name}</h3>
          <p>{description}</p>
          <CartItemCounter />
        </div>
      </div>
      <div className="cart-item-action">
        <button className="btn-box btn-primary">
          <i class="fas fa-trash"></i>
        </button>
        <p>{price}$</p>
      </div>
    </div>
  );
}
