import { Link } from "react-router-dom";
import "./styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-copyrights">
        <h4>Omelia Shop</h4>
        <p>
          Omelia Copyright © 2021
          <br />
          Coded With Love 🖤.
          <br />
          Built with love in New York All rights reserved.
        </p>
      </div>
      <div className="footer-nav-links">
        <ul>
          <li>
            <p>Main Pages</p>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="footer-nav-links">
        <ul>
          <li>
            <p>Shop</p>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/product">Product Preview</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
        </ul>
      </div>
      <div className="footer-nav-links">
        <ul>
          <li>
            <p>Registeration</p>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/newsletter">Newsletter</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
