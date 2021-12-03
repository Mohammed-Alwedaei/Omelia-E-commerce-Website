import "./styles/button-primary.css";
import { Link } from "react-router-dom";

export default function AnchorPrimary({ to, text }) {
  return (
    <Link to={to} className="btn btn-primary">
      {text}
    </Link>
  );
}
