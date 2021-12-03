import "./styles/button-secondary.css";
import { Link } from "react-router-dom";

export default function AnchorSecondary({ to, text }) {
  return (
    <Link to={to} className="btn btn-secondary">
      {text}
    </Link>
  );
}
