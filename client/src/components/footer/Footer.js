import React, { Component } from "react";
import "./Footer.css";


class Footer extends Component {
    render() {
        return (
          
            

            <footer class="footer">
               <div class="footer-link">
                  <a href="/about">About</a> |
                  <a href="/feedback">Feedback</a> |
                  <a href="https://www.facebook.com/IronhackMIA/"><i class="fab fa-facebook-square"></i></a> |
                  <a href="https://www.linkedin.com/showcase/ironhack-miami/"><i class="fab fa-linkedin"></i></a> |
                  <a href="https://www.instagram.com/ironhackmia/?hl=en"><i class="fab fa-instagram"></i></a> |
                  <a href="https://twitter.com/ironhackmia?lang=en"><i class="fab fa-twitter-square"></i></a>
               </div>
            </footer>
      
          
        )
    }
}



export default Footer;