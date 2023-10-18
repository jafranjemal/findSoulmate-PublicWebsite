import React, { useState } from "react";
import logo from "./assets/images/Logo_LS.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "./components/Popup";
import Register from "./Register";
import { removeError } from "./features/profile/Profile.slice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [trigerStatus, setTrigerStatus] = useState(false);
  const [active, setActive] = useState(false);
  const { stepOne, isSaved, stepTwo, registerError, errorMsg, profilePicture } =
    useSelector((state) => state.profile);
  const dispatch = useDispatch();

  function ScrollUp() {
    window.scrollTo(0, 0);
  }

  const ToggleButton = () => {
    setActive((e) => !e);
   // console.log("clicked", active);
  };
  return (
    <div>
      <header id="home" className="header">
        <div className="navbar-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="index.html">
                    {/* <img src="src\assets\images\Logo_LS.png" alt="Logo" /> */}
                    <img src={logo} alt="logo" />
                    <h6
                      style={{
                        backgroundColor: "red",
                        padding: "5px",
                        color: "white",
                        textAlign: "center",
                        marginTop: 4,
                      }}
                    >
                      findsoulmate PVT LTD.
                    </h6>
                  </a>
                  {/* <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  > */}

                  <button
                    onClick={() => ToggleButton()}
                    className="navbar-toggler"

                    // data-toggle="collapse"
                    // data-target="#navbarSupportedContent"
                    // aria-controls="navbarSupportedContent"
                    // aria-expanded="false"
                    // aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                  </button>

                  <div
                    className={
                      "navbar-collapse sub-menu-bar" +
                      (active ? " active" : " collapse")
                    }
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="page-scroll" href="#hero-area">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#events">
                          Events
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#services">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#team">
                          Testimonial
                        </a>
                      </li>
                      {/* <li className="nav-item">
                        <a className="page-scroll" href="#pricing">
                          Pricing
                        </a>
                      </li> */}
                      <li className="nav-item">
                        <a className="page-scroll" href="#testimonial">
                          Screenshots
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#contact">
                          Contact
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#aboutus">
                          About Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="hero-area" className="hero-area-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
              <div className="contents">
                <h2 className="head-title">Find Soulmate</h2>
                <p>
                  Looking for your soulmate? Look no further than Find Soulmate,{" "}
                  <br />
                  the mobile matrimony app that brings together like-minded
                  individuals looking for meaningful relationships. With our
                  user-friendly interface and advanced search algorithms, you
                  can easily find and connect with potential matches based on
                  your preferences and interests. Whether you're looking for a
                  life partner Find Soulmate has everything you need to make
                  meaningful connections. <br />
                  <b>
                    <i>
                      Download the app today and start your journey towards
                      finding true love!
                    </i>
                  </b>
                </p>
                <div className="header-button">
                  <a href="#download" rel="nofollow" className="btn btn-common">
                    Download Now
                  </a>

                  <button
                    onClick={() => setTrigerStatus(true)}
                    className="btn btn-common"
                  >
                    Register Now
                  </button>
                  <Popup
                    trigger={trigerStatus}
                    popupClose={() => {
                      setTrigerStatus(false);
                      if (registerError) {
                        //clear msg
                        dispatch(removeError());
                      }
                    }}
                  >
                    {/* <h1>Fill This Form </h1> */}
                <Register stepChanged={ScrollUp} modelClosed={() => setTrigerStatus(false)} />

                  </Popup>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
              <div className="intro-img">
                <img className="img-fluid" src="images/npd5SdHL6iI5.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
