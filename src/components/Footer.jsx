function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            Shop<span>Sphere</span>
          </div>

          <p>
            Discover products you'll love.
            <br />
            Simple shopping, better experience.
          </p>
        </div>

        {/* Shop */}
        <div className="footer-column">
          <h3>Shop</h3>

          <a href="#products">All Products</a>
          <a href="#products">Clothing</a>
          <a href="#products">Footwear</a>
          <a href="#products">Accessories</a>
        </div>

        {/* Help */}
        <div className="footer-column">
          <h3>Help</h3>

          <a href="#products">Shipping</a>
          <a href="#products">Returns</a>
          <a href="#products">Contact Us</a>
          <a href="#products">FAQ</a>
        </div>

        {/* Social */}
        <div className="footer-column">
          <h3>Follow Us</h3>

          <div className="social-links">
            <a href="#instagram">Instagram</a>
            <a href="#youtube">YouTube</a>
            <a href="#github">GitHub</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 ShopSphere. All rights reserved.
        </p>

        <p>
          Built with React & JavaScript
        </p>
      </div>
    </footer>
  );
}

export default Footer;