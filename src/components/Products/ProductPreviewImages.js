import "./styles/product-preview-images.css";
import ButtonPrimary from "../buttons/ButtonPrimary";
import AnchorSecondary from "../buttons/AnchorSecondary";

export default function ProductPreviewImages({ images, info }) {
  return (
    <section className="product-preview-container">
      <div className="product-preview-image">
        <img src={images.image1.src} alt={images.image1.alt} />
        <img src={images.image2.src} alt={images.image2.alt} />
        <img src={images.image3.src} alt={images.image3.alt} />
        <img src={images.image4.src} alt={images.image4.alt} />
      </div>
      <div className="product-preview-desc">
        <div className="product-preview-desc-sticky">
          <h1>{info.heading}</h1>
          <p>{info.description}</p>
          <h3>This item price is {info.price}$</h3>
          <div>
            <ButtonPrimary text="Add To Cart" />
            <AnchorSecondary text="Buy Now!" to="/checkout" />
          </div>
        </div>
      </div>
    </section>
  );
}
