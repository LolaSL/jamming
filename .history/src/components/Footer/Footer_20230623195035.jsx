import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" data-testid="footer-test">
      {/* <ul className="menuItems" data-testid="ul-test">
        <Link to="/terms-of-use" className="menuItem">
          Terms Of Use
        </Link>
        <Link to="/privacy-policy" className="menuItem">
          Privacy-Policy
        </Link>
        <Link to="/about" className="menuItem">
          About
        </Link>
      </ul> */}
      <div className="infoText" data-test="infoText-test">
        <p>Just listen your lovely music</p>
      </div>
      <div className="socialIcons" data-test="socialIcons-test">
         <Link to="https://github.com/"> <SocialIcon
          className="icon"
        </Link>
          style={{ height: 27, width: 27, backgroundColor: "white" }}
        
          <FaGithub />
        </SocialIcon>
        <SocialIcon
          className="icon"
          url="https://linkedin.com"
          style={{ height: 27, width: 27 }}
        >
          <FaLinkedin />
        </SocialIcon>
        <div data-test="copyright-test">
          &copy; {new Date().getFullYear()} Copyright: Jamming
        </div>
      </div>
    </footer>
  );
};

export default Footer;
