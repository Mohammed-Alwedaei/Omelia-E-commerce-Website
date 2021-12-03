import GapSm from "../gaps/GapSm";
import CartItem from "./CartItem";
import CartDescription from "./CartDescription";

import products from "../../data/products";

import "./styles/cart.css";
import CartCheckout from "./CartCheckout";

export default function CartContainer({ productsNumber }) {
  return (
    <div className="cart-container">
      <CartDescription />
      <GapSm />
      {products.slice(0, productsNumber).map((product) => {
        return <CartItem image={product.image.src} alt={product.image.alt} name={product.name} description={product.description} price="15" />;
      })}
      <CartCheckout />
    </div>
  );
}
