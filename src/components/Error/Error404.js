import AnchorPrimary from "../Buttons/AnchorPrimary";

import "./styles/error-404.css";

export default function Error404() {
  return (
    <div className="error-404">
      <h1>Error Page Not Found</h1>
      <p>Sorry, but the requested page is not available at the moment.</p>
      <AnchorPrimary to="/" text="Back to home" />
    </div>
  );
}
