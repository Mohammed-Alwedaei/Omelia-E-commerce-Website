import ButtonPrimary from "../buttons/ButtonPrimary";
import AnchorSecondary from "../buttons/AnchorSecondary";

import "./styles/product-card.css";

export default function ProductCard({ productImage, imageAlt, productName, productPrice, productDesc }) {
  return (
    <div className="product-card">
      <img src={productImage} alt={imageAlt} />

      <div>
        <h3>{productName}</h3>
        <h4>{productPrice}$</h4>
        <p>{productDesc}</p>
        <div>
          <ButtonPrimary text="Add to cart" />
          <AnchorSecondary to="/product" text="Preview" />
        </div>
      </div>
    </div>
  );
}
