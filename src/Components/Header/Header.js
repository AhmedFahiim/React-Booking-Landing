import React, { useState } from "react";
import "./Header.scss";

function Header() {
  const [active, setActive] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const linksToggler = () => setActive(!active);

  const activeLinkHandler = (e) =>
    setActiveLink(e.currentTarget.getAttribute("id"));

  return (
    <header className="row">
      <div className="logo col-5 col-md-3 col-lg-3">
        <img src="images/logo-bookmark.svg" alt="logo" />
      </div>
      <div className="links-holder col-5 col-md-7 col-lg-8">
        <ul className="links">
          <li
            className="link-item"
            id="0"
            onClick={(e) => activeLinkHandler(e)}
          >
            <a href="#home" className={`${activeLink == 0 && "active"}`}>
              Home
            </a>
          </li>
          <li
            id="1"
            onClick={(e) => activeLinkHandler(e)}
            className="link-item "
          >
            <a href="#Features" className={`${activeLink == 1 && "active"}`}>
              Features
            </a>
          </li>
          <li
            id="2"
            onClick={(e) => activeLinkHandler(e)}
            className="link-item"
          >
            <a href="#Download" className={`${activeLink == 2 && "active"}`}>
              Download
            </a>
          </li>
          <li
            id="4"
            onClick={(e) => activeLinkHandler(e)}
            className="link-item"
          >
            <a href="#FAQS" className={`${activeLink == 4 && "active"}`}>
              FAQS
            </a>
          </li>
          <li
            id="3"
            onClick={(e) => activeLinkHandler(e)}
            className="link-item"
          >
            <a href="#Contact" className={`${activeLink == 3 && "active"}`}>
              Contact
            </a>
          </li>
        </ul>
        <img
          onClick={linksToggler}
          className="burger"
          src="images/icon-hamburger.svg"
          alt="icon"
        />
      </div>
      <button className="main col-md-2 col-lg-1">Login</button>
      <article className={`mobile-links-holder ${active && "active"}`}>
        <div className="container">
          <div className="links-head">
            <h3 className="logo">BOOKMARK</h3>
            <button onClick={linksToggler} className="close">
              X
            </button>
          </div>
          <ul className="mobile-links">
            <li className="mobile-link-item">
              <a href="#">Features</a>
            </li>
            <li className="mobile-link-item">
              <a href="#">Pricing</a>
            </li>
            <li className="mobile-link-item">
              <a href="#">Contact</a>
            </li>
          </ul>
          <button className="mobile-main">Login</button>
          <div className="social-icons">
            <img src="images/icon-facebook.svg" alt="icon" />
            <img src="images/icon-twitter.svg" alt="icon" />
          </div>
        </div>
      </article>
    </header>
  );
}

export default Header;
