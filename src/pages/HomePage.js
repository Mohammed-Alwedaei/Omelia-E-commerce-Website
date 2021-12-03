import CallToAction from "../components/call-to-actions/CallToAction";

import Catagories from "../components/catagories/Catagories";
import SectionDescription from "../components/typography/SectionDescription";

import Masthead from "../components/masthead/Masthead";

import ProductsContainer from "../components/products/ProductsContainer";

import GapMd from "../components/gaps/GapMd";

import collections from "../data/collections";

export default function HomePage() {
  return (
    <main>
      <Masthead />
      <GapMd />

      <SectionDescription heading="Our Latest Products" description="We offer many products" />

      <GapMd />

      <ProductsContainer productsNumber={3} />

      <GapMd />
      <SectionDescription heading="Explore our collections" description="We offer a variety set of products." />
      <GapMd />
      <Catagories collections={collections} />
      <GapMd />
      <CallToAction />
    </main>
  );
}
