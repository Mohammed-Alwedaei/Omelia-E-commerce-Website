import CartContainer from "../components/cart/CartContainer";
import GapLg from "../components/gaps/GapLg";
export default function CartPage() {
  return (
    <main>
      <GapLg />
      <CartContainer productsNumber={3} />
      <GapLg />
    </main>
  );
}
