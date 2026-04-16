import "../index.css";
export default function footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>MySite</h2>
          <p>Building modern websites with ❤️</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Instagram | LinkedIn | GitHub</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 MySite. All rights reserved.</p>
      </div>
    </footer>
  );
}
