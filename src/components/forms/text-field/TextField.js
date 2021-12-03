import "./styles/text-field.css";

export default function TextField({ labelText, labelFor, inputType, placeholder }) {
  return (
    <div className="text-field">
      <label htmlFor={labelFor}>{labelText}</label>
      <input id={labelFor} name={labelFor} type={inputType} placeholder={placeholder} />
    </div>
  );
}
