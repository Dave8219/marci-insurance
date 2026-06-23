const RenderFooter = () => {
  return (
    <>
      <footer>
        <div className="footer-grid">
          <div>
            <img
              src="src/assets/m-barrera-logo.png"
              alt="company logo"
              className="img-logo-2"
            />
            <br />
            <br />
            <p>Helping families protect their health and financial future.</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>Email: Mbarrera830@icloud.com</p>
            <p>Phone: (956) 283-4343</p>
            <p>Location: McAllen, Texas, USA</p>
          </div>

          <div>
            <h4>Office Hours</h4>
            <p>Monday – Saturday</p>
            <p>9:00 AM – 6:00 PM</p>
          </div>
        </div>
        <div class="footer-bottom">
          © 2026 Marci Insurance. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default RenderFooter;
