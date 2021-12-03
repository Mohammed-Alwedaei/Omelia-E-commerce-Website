import GapMd from "../components/gaps/GapMd";
import ProductCard from "../components/Products/ProductCard";
import ProductsContainer from "../components/Products/ProductsContainer";
import SectionDescription from "../components/typography/SectionDescription";

import CartCheckout from "../components/cart/CartCheckout";

import products from "../data/products";

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
