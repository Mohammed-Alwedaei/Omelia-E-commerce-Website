import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar.js";

import Container from "./components/container/Container";

import Footer from "./components/footer/Footer";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import ShopPage from "./pages/ShopPage";
import GapSm from "./components/gaps/GapSm";
import NewsletterPage from "./pages/NewsletterPage";
import ProductPreviewPage from "./pages/ProductPreviewPage";
import ContactPage from "./pages/ContactPage";
import WishlistPage from "./pages/WishlistPage";
import Error404Page from "./pages/Error404Page";

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />

            <Route path="/cart" element={<CartPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/product" element={<ProductPreviewPage />} />
            <Route path="/product" element={<ProductPreviewPage />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </div>
        <GapSm />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
