import "./styles/counter-field.css";

export default function CounterField({ counter }) {
  return <input className="counter-field" type="text" value={counter} />;
}
