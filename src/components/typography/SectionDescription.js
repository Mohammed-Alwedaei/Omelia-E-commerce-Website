import "./styles/section-description.css";

export default function SectionDescription({ heading, description }) {
  return (
    <div className="section-description">
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  );
}
