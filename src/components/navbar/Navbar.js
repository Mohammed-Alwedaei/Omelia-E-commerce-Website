import "./styles/navbar.css";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenu = useRef();
  const motto = useRef();

  const handleClick = () => {
    if (isOpen !== true) {
      setIsOpen(true);
      mobileMenu.current.children[0].className = "motto open-menu-motto";
      mobileMenu.current.children[1].className = "nav-link-container";
      mobileMenu.current.children[2].className = "burger-menu burger-menu-light";
    } else {
      setIsOpen(false);
      mobileMenu.current.children[0].className = "motto ";
      mobileMenu.current.children[1].className = "close-menu nav-link-container";
      mobileMenu.current.children[2].className = "burger-menu burger-menu-dark";
    }
  };

  return (
    <header ref={mobileMenu}>
      <h1 className="motto">
        <Link ref={motto} className="close-menu-motto" to="/">
          Omelia Shop
        </Link>
      </h1>
      <nav className="close-menu nav-link-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart">
              <i class="fas fa-shopping-cart"></i>
              &nbsp; Cart
            </Link>
          </li>
          <li>
            <Link to="/wishlist">
              <i class="fas fa-star"></i>
              &nbsp; Wishlist
            </Link>
          </li>
          <li>
            <Link to="/login">
              <i class="fas fa-sign-in-alt"></i>
              &nbsp; Login
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <i class="fas fa-user-plus"></i>
              &nbsp; Signup
            </Link>
          </li>
        </ul>
      </nav>
      <div className="burger-menu burger-menu-dark" onClick={handleClick}>
        <div className="burger-item burger-item-1"></div>
        <div className="burger-item burger-item-2"></div>
        <div className="burger-item burger-item-3"></div>
      </div>
    </header>
  );
}
