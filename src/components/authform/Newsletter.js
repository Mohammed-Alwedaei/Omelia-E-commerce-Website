import TextField from "../forms/text-field/TextField";
import "./styles/newsletter.css";

export default function Newsletter() {
  return (
    <div>
      <form className="newsletter">
        <h1>Newsletter Subscription</h1>
        <p>
          Subscribe to the <strong>newsletter to get the latest updates and discount coupons.</strong>
        </p>
        <TextField labelText="Newletter" labelFor="newsletter" inputType="email" placeholder="email@domain.com" />
        <button className="btn btn-primary">Subscribe</button>
      </form>
    </div>
  );
}
