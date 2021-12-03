import GapMd from "../components/gaps/GapMd";

import ProductsContainer from "../components/products/ProductsContainer";
import SectionDescription from "../components/typography/SectionDescription";

import CartCheckout from "../components/cart/CartCheckout";

export default function WishlistPage() {
  return (
    <section>
      <GapMd />
      <SectionDescription heading="Wishlist" description="Your wishlist cart contains these products" />
      <GapMd />
      <ProductsContainer productsNumber={4} />
      <GapMd />
      <CartCheckout />
    </section>
  );
}
