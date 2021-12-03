import ProductsGrid from "./ProductsGrid";
import FilterGridAside from "./FilterGridAside";

import "./styles/filter-grid.css";

export default function FilterGridContainer() {
  return (
    <section>
      <div className="filter-grid-container">
        <FilterGridAside />
        <ProductsGrid productsNumber={5} />
      </div>
    </section>
  );
}
