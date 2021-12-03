import "./styles/textarea-field.css";
export default function TextareaField({ labelText, labelFor, placeholder }) {
  return (
    <div className="textarea-field">
      <label htmlFor={labelFor}>{labelText}</label>
      <textarea id={labelFor} name={labelFor} placeholder={placeholder}></textarea>
    </div>
  );
}
