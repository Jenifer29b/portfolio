import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Jenifer</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>

            <li>
              <a href="#portfolio" className="footer__link">
                Projects
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://www.instagram.com/_.jeni_06"
              className="footer__social-link"
              target="_blank"
            >
              <i class="bx bxl-instagram"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/jenifer29b/"
              className="footer__social-link"
              target="_blank"
            >
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>

          <span className="footer__copy">
            &#169; Jenifer. All Rights Reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
