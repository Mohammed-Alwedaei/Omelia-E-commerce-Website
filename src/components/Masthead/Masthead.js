import "./styles/masthead.css";
import mastheads from "../../data/masthead";

export default function Masthead() {
  return (
    <div className="masthead">
      <img src={mastheads.image.src} alt="Web shop" />
    </div>
  );
}
