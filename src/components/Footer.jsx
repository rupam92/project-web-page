import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h2>Foodie Zone</h2>
        <p>Your favourite food delivered fresh & fast.</p>

        <div className="social-icons">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-youtube"></i></a>
        </div>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <p><a href="/">Home</a></p>
        <p><a href="/about">About</a></p>
        <p><a href="/offer">Offers</a></p>
        <p><a href="/contact">Contact</a></p>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>📍 Bhopal, Madhya Pradesh</p>
        <p>📞 +91 98765 43210</p>
        <p>📧 support@foodiezone.com</p>
      </div>

      <p className="footer-bottom">© 2025 Foodie Zone — All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
