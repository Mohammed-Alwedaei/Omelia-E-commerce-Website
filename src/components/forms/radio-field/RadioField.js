import RadioButton from "./RadioButton";

export default function RadioField() {
  return (
    <div>
      <p>Availability</p>
      <RadioButton name="stock-status" value="in-stock" text="In Stock" checked={true} />
      <RadioButton name="stock-status" value="out-of-stock" text="Out of Stock" />
    </div>
  );
}
