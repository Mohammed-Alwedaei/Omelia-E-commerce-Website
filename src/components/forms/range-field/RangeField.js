import "./styles/range-field.css";

export default function RangeField({ rangeFor }) {
  return (
    <div className="range-field">
      <label htmlFor={rangeFor}>Filter By Price</label>
      <input id={rangeFor} type="range" className="slider" />
    </div>
  );
}
