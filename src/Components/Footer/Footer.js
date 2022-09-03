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
              <li className="link-item ">
                <a href="#" className="active">
                  Features
                </a>
              </li>
              <li className="link-item">
                <a href="#">Pricing</a>
              </li>
              <li className="link-item">
                <a href="#">Contact</a>
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
