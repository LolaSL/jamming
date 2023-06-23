

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" data-testid="footer-test">
      <div className="infoText" data-test="infoText-test">
        <p>Just listen your lovely music</p>
      </div>
        <div data-test="copyright-test">
          &copy; {new Date().getFullYear()} Copyright: Jamming
        </div>
  
    </footer>
  );
};

export default Footer;
