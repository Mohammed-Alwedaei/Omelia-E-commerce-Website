import ProductPreviewImages from "../components/products/ProductPreviewImages";
import SectionDescription from "../components/typography/SectionDescription";

import ProductCard from "../components/products/ProductCard";
import ProductsContainer from "../components/Products/ProductsContainer";

import GapMd from "../components/gaps/GapMd";
import img1 from "../images/masthead.jpg";
import productImage from "../images/masthead.jpg";

export default function ProductPreviewPage() {
  const images = {
    image1: {
      src: img1,
      alt: "Some Text",
    },
    image2: {
      src: img1,
      alt: "Some Text",
    },
    image3: {
      src: img1,
      alt: "Some Text",
    },
    image4: {
      src: img1,
      alt: "Some Text",
    },
  };
  const info = {
    heading: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, explicabo repudiandae fugit doloribus dolore ratione atque voluptatum quod tempore minus molestiae esse ab enim hic officia ad magnam blanditiis. Asperiores quod totam modi accusantium natus porro praesentium, dolore iusto dolor nobis rerum impedit, minus tempore.",
    price: 15,
  };

  return (
    <main>
      <ProductPreviewImages images={images} info={info} />
      <GapMd />
      <SectionDescription heading="You may also like" description="We got your back covered" />
      <GapMd />
      <ProductsContainer>
        <ProductCard productName="Product 01" productPrice="15" productDesc="lorem ipsum dolor" productImage={productImage} />
        <ProductCard productName="Product 01" productPrice="15" productDesc="lorem ipsum dolor" productImage={productImage} />
        <ProductCard productName="Product 01" productPrice="15" productDesc="lorem ipsum dolor" productImage={productImage} />
      </ProductsContainer>
    </main>
  );
}
