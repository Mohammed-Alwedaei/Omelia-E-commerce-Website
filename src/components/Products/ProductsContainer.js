import products from "../../data/products";
import "./styles/product-container.css";
import ProductCard from "./ProductCard";

export default function ProductsContainer({ productsNumber }) {
  return (
    <div className="products-container">
      {products.slice(0, productsNumber).map((product) => {
        return <ProductCard key={product.id} productImage={product.image.src} productName={product.name} productPrice={product.price} productDesc={product.description} />;
      })}
    </div>
  );
}
