import AnchorSecondary from "../Buttons/AnchorSecondary";
import "./styles/call-to-action.css";

export default function CallToAction() {
  return (
    <section className="call-to-action-sm">
      <h2>Subscribe to newsletter</h2>
      <p>Subsrcibe to our newsletter to get the latest news and discount coupons.</p>
      <AnchorSecondary to="/newsletter" text="Subscribe" />
    </section>
  );
}
