import React, { Component } from "react";
import winmac from "./assets/images/Logo_LS.png";
// import playstore from './assets/images/play-store.png';
// import appstore from './assets/images/app-store.png';
export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer" className="footer-area section-padding">
          <div className="container">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                  <div className="widget">
                    <h3 className="footer-logo">
                      <img src={winmac} />
                    </h3>
                    <div className="textwidget">
                      <p>
                        Looking for your soulmate? Look no further than Find
                        Soulmate, the mobile matrimony app that brings together
                        like-minded individuals looking for meaningful
                        relationships.
                      </p>
                    </div>
                    {/* <h3>Download Our App</h3>
              <p>Download App for Android and ios mobile phone.</p>
              <img src={playstore}  />
              <img src={appstore}  /> */}

                    <div className="social-icon">
                      <a
                        className="facebook"
                        href="https://web.facebook.com/jjsoftGlobal/?_rdc=1&_rdr"
                      >
                        <i className="lni lni-facebook-filled" />
                      </a>
                      <a className="twitter" href="#">
                        <i className="lni lni-twitter-filled" />
                      </a>
                      <a className="instagram" href="#">
                        <i className="lni lni-instagram-filled" />
                      </a>
                      <a
                        className="linkedin"
                        href="https://www.linkedin.com/in/jafran-jemal/"
                      >
                        <i className="lni lni-linkedin-original" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                  <h3 className="footer-titel">Products</h3>
                  <ul className="footer-link">
                    <li>
                      <a href="#">Tracking</a>
                    </li>
                    <li>
                      <a href="#">Application</a>
                    </li>
                    <li>
                      <a href="#">Resource Planning</a>
                    </li>
                    <li>
                      <a href="#">Enterprise</a>
                    </li>
                    <li>
                      <a href="#">Employee Management</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                  <h3 className="footer-titel">Resources</h3>
                  <ul className="footer-link">
                    <li>
                      <a href="#">Payment Options</a>
                    </li>
                    <li>
                      <a href="#">Fee Schedule</a>
                    </li>
                    <li>
                      <a href="#">Getting Started</a>
                    </li>
                    <li>
                      <a href="#">Identity Verification</a>
                    </li>
                    <li>
                      <a href="#">Card Verification</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                  <h3 className="footer-titel">Contact</h3>
                  <ul className="address">
                    <li>
                      <a href="#">
                        <i className="lni lni-map-marker" />
                        186/A2, Mathugama Road, Aluthgama, Sri Lanka
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-phone-set" /> P:+94 72 413 7048
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-envelope" /> E:{" "}
                        <span
                          className="__cf_email__"
                          data-cfemail="d7b4b8b9a3b6b4a397a2beb3b2b4bcf9b4b8ba"
                        >
                          [email&nbsp;protected]
                        </span>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div id="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="copyright-content">
                    <p>
                      Designed and Developed by{" "}
                      <a
                        rel="nofollow"
                        href="https://l.facebook.com/l.php?u=https%3A%2F%2Fjjsoft-global-software-company.netlify.app%2F&h=AT0bdtHx7Bkv_zLMWbcG_8Z9XKio-vvXR2UMapdsWdUnPjuGHUfQSV_G69u0puPApBkm9gmyNJ9N_tfnHPWUkWQZcKpzM3EkMdizBTAA7qFjmCB64eis-pYaXYIb2Rnc5zHyuUMYvUreEMVlUtDaNg"
                      >
                        JJ Soft Global
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
