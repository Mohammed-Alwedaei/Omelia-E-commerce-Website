import { Link } from "react-router-dom";

export default function CartCheckout() {
  return (
    <div className="cart-checkout">
      <h1>Ready to checkout?</h1>
      <button className="btn btn-primary">
        <Link to="/checkout">
          <i class="fas fa-money-bill-wave-alt"></i> &nbsp; Checkout
        </Link>
      </button>
    </div>
  );
}
