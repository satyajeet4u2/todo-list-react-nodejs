import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>MyApp</h3>
        <p>Building modern web applications.</p>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: info@myapp.com</p>
        <p>Phone: +91 9876543210</p>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MyApp. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;