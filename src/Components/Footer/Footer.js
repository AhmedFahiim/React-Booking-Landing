import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <h4 className="brand col-sm-2">BOOKMARK</h4>
          <div className="links-holder col-sm-8">
            <ul className="links">
              <li className="link-item">
                <a href="#home">Home</a>
              </li>
              <li className="link-item ">
                <a href="#Features">Features</a>
              </li>
              <li className="link-item">
                <a href="#Download">Download</a>
              </li>
              <li className="link-item">
                <a href="#FAQS">FAQS</a>
              </li>
              <li className="link-item">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="social col-sm-2">
            <a href="#">
              <img src="images/icon-facebook.svg" />
            </a>
            <a href="#">
              <img src="images/icon-twitter.svg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
