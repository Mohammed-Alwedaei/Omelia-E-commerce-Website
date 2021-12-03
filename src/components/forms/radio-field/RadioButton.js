import "./styles/radio-button.css";

export default function RadioButton({ name, value, text, checked }) {
  return (
    <label className="radio-container">
      <input type="radio" name={name} value={value} checked={checked} />
      {text}
      <span className="checkmark"></span>
    </label>
  );
}
