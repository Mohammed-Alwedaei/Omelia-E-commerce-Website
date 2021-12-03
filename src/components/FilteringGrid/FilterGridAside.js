import RadioField from "../forms/radio-field/RadioField";
import TagsContainer from "../tags/TagsContainer";
import Tag from "../tags/Tag";
import GapSm from "../gaps/GapSm";
import RangeField from "../forms/range-field/RangeField";

export default function FilterGridAside() {
  return (
    <aside className="filter-bar">
      <form className="inner-filter-bar">
        <h1>Filter Items</h1>
        <GapSm />

        <RangeField rangeFor="priceFilter" min="0" max="100" />

        <GapSm />

        <RadioField />

        <GapSm />
        <p>Tags Group</p>
        <TagsContainer>
          <Tag tagText="Jackets" />
          <Tag tagText="Jeans" />
          <Tag tagText="Shirts" />
          <Tag tagText="T-shirts" />
          <Tag tagText="Gloves" />
        </TagsContainer>
      </form>
    </aside>
  );
}
