import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="footer-container">
          <a href="/about" className="a-text">About</a>  <a href="/feedback" className="a-text">Feedback</a> 
          <a
            href="https://www.facebook.com/IronhackMIA/"
            className="facebook icon"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>{" "}
          
          <a
            href="https://www.linkedin.com/showcase/ironhack-miami/"
            className="linkedin icon"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>{" "}
          
          <a
            href="https://www.instagram.com/ironhackmia/?hl=en"
            className="instagram icon"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>{" "}
          
          <a
            href="https://twitter.com/ironhackmia?lang=en"
            className="twitter icon"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
