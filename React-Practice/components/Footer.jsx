import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>🍔 FoodVilla</h2>
          <p>
            Delivering happiness with delicious food at your doorstep.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📍 Bhubaneswar, Odisha</p>
          <p>📞 +91 9876543210</p>
          <p>📧 support@foodvilla.com</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <span>🌐</span>
            <span>📸</span>
            <span>🐦</span>
            <span>▶️</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 FoodVilla. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;