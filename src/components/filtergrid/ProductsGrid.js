import products from "../../data/products";
import "./styles/products-grid.css";
import ProductCard from "../products/ProductCard";

export default function ProductsGrid({ productsNumber }) {
  return (
    <div className="products-grid">
      {products.slice(0, productsNumber).map((product) => {
        return <ProductCard key={product.id} productImage={product.image.src} productName={product.name} productPrice={product.price} productDesc={product.description} />;
      })}
    </div>
  );
}
