import TagsContainer from "../components/tags/TagsContainer";
import Tag from "../components/tags/Tag";
import Masthead from "../components/Masthead/Masthead";
import GapMd from "../components/gaps/GapMd";
import FilterGridContainer from "../components/FilteringGrid/FilterGridContainer";
import CallToAction from "../components/call-to-actions/CallToAction";
import Catagories from "../components/catagories/Catagories";

import collections from "../data/collections";

export default function ShopPage() {
  return (
    <main>
      <Masthead />
      <GapMd />
      <TagsContainer>
        <Tag tagText="Modern" />
        <Tag tagText="Minimal" />
        <Tag tagText="Winter" />
        <Tag tagText="Automn" />
        <Tag tagText="Women" />
        <Tag tagText="Summer" />
        <Tag tagText="Spring" />
        <Tag tagText="Jacket" />
      </TagsContainer>
      <GapMd />
      <FilterGridContainer />
      <GapMd />
      <Catagories collections={collections} />
      <GapMd />
      <CallToAction />
    </main>
  );
}
