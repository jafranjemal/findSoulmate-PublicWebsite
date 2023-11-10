import React, { Component } from "react";
import winmac from "./assets/images/Logo_LS.png";
// import playstore from './assets/images/play-store.png';
// import appstore from './assets/images/app-store.png';
import packageJson from "../package.json";

export default class Footer extends Component {
  render() {
    const projectVersion = packageJson.version;
    return (
      <div>
        <footer id="footer" className="footer-area section-padding">
          <div className="container">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 col-mb-12">
                  <div
                    className="widget"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    <h3 className="footer-logo">
                      <img src={winmac} />
                    </h3>
                    <h5
                      style={{
                        backgroundColor: "red",
                        padding: "5px",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      findsoulmate PVT LTD.
                    </h5>
                    <div className="textwidget">
                      <p>
                        Looking for your soulmate? Look no further than Find
                        Soulmate, the mobile matrimony app that brings together
                        like-minded individuals looking for meaningful
                        relationships.
                      </p>
                    </div>

                    <div className="social-icon">
                      <a
                        className="facebook"
                        href="https://www.facebook.com/findsoulmate.lk"
                      >
                        <i className="lni lni-facebook-filled" />
                      </a>
                      <a className="instagram" href="https://www.youtube.com/@findsoulmate-lk">
                        
                        <i className="lni lni-youtube"></i>
                      </a>
                      <a className="instagram" href="https://www.instagram.com/findsoulmate.lk">
                        <i className="lni lni-instagram-filled" />
                      </a>
                      {/* <a
                        className="linkedin"
                        href="https://www.linkedin.com/in/jafran-jemal/"
                      >
                        <i className="lni lni-linkedin-original" />
                      </a> */}
                    </div>
                  </div>
                </div>
                <div
                  id="aboutus"
                  className="footer-titel col-lg-9 col-md-12 col-sm-12 col-xs-12"
                >
                  <h3
                    style={{
                      textTransform: "uppercase",
                    }}
                    className="foote  about_us"
                  >
                    Our Vision & Mission
                  </h3>
                  <ul className="footer-link">
                    <li style={{ textAlign: "justify" }}>
                      <p>
                        <strong>At Find Soulmate Pvt Ltd</strong>, our vision is
                        to lead a revolution within the Muslim community of Sri
                        Lanka. Through our mobile-based matrimonial app, we are
                        committed to reducing the numbers of widows, widowers,
                        and divorced individuals.
                      </p>

                      <p>
                        Our platform provides a safe and exclusive space for
                        them to find genuine connections, leading to new
                        journeys of companionship and happiness.
                      </p>

                      <p>
                        Our mission extends far beyond matchmaking; we are
                        reshaping societal perceptions, fostering inclusivity,
                        and nurturing enduring relationships deeply rooted in
                        Islamic values. Together with Find Soulmate Pvt Ltd, we
                        are building a future where love knows no boundaries,
                        and second chances are celebrated.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="footer-titel col-md-12 col-sm-12 col-xs-12">
                  <h3
                    style={{
                      textTransform: "uppercase",
                      marginTop: 30,
                    }}
                    className="about_us"
                  >
                    About Us - <strong>Find Soulmate (Pvt) Ltd</strong>
                  </h3>

                  <ul>
                    <li>
                      <p>
                        <strong>Welcome to Find Soulmate Pvt Ltd</strong>, a
                        groundbreaking initiative that was conceived in{" "}
                        <strong>October 2020</strong> through a collaborative
                        effort between visionaries from diverse fields.{" "}
                        <strong>FindSoulmate Pvt Ltd</strong>, established in
                        partnership with <strong>jjSoft global Pvt Ltd</strong>,
                        a distinguished software development company.
                        <br />
                        <br />
                        Find Soulmate Pvt Ltd transcends the conventional
                        matrimonial app. We take pride in being the best mobile
                        app matrimonial service provider. Our dedication is to
                        create a profound change within the Muslim community of
                        Sri Lanka.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="footer-titel col-md-12 col-sm-12 col-xs-12">
                  <h3
                    style={{
                      textTransform: "uppercase",
                    }}
                    className="footer-titel"
                  >
                    Our Founders
                  </h3>

                  <ul>
                    <li>
                      <p>
                        The foundation of <strong>Find Soulmate Pvt Ltd</strong>{" "}
                        was laid by <strong>Mr. Mirzook Faleel</strong>, a
                        former Quazi Judge. Alongside him,{" "}
                        <strong>Mr. Jafran Jemal</strong>, the founder of{" "}
                        <strong>JJSoft Global</strong>, played an instrumental
                        role in shaping this visionary idea. Additionally,{" "}
                        <strong>Mr. Riyasi Mousoon</strong> was a key driving
                        force behind the establishment of{" "}
                        <strong>Find Soulmate Pvt Ltd</strong>.
                      </p>
                    </li>
                    <li>
                      <div className="founder-container">
                        <div className="founder-box">
                          <img className="founder-img" alt={"mirzook.jpg"}  src="mirzook.jpg" />
                          <div className="founder-title">
                            <h1>Mr.Mirzook Faleel</h1>
                            <h5>Founder,Director,and Secretary</h5>
                          </div>
                        </div>

                        <div className="founder-box">
                          <img className="founder-img" alt="jafranjemal" src="jafran.jpg" />
                          <div className="founder-title">
                            <h1>Mr.Jafran Jemal</h1>
                            <h5>Co-Founder and Director</h5>
                          </div>
                        </div>

                        <div className="founder-box">
                          <img className="founder-img" alt="riyasi" src="riyasi.jpeg" />
                          <div className="founder-title">
                            <h1>Mr.Riyasi Mousoon</h1>
                            <h5>Director</h5>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="footer-titel col-md-12 col-sm-12 col-xs-12">
                  <h3
                    style={{
                      textTransform: "uppercase",
                    }}
                    className="footer-titel"
                  >
                    The Birth of an Idea
                  </h3>

                  <ul>
                    <li>
                      <p>
                        <strong>Mr. Jafran Jemal</strong>, with his wealth of
                        experience and innovative insights, emerged as the
                        brainchild behind the concept of{" "}
                        <em>Find Soulmate Pvt Ltd</em>. Fueled by his passion
                        for technology and deep commitment to fostering positive
                        change, he developed the initial app ideas and Minimum
                        Viable Product (MVP) for <em>Find Soulmate</em>. During
                        this crucial period, he sought investment opportunities
                        to bring his vision to life.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="footer-titel col-md-12 col-sm-12 col-xs-12">
                  <h3
                    style={{
                      textTransform: "uppercase",
                    }}
                    className="footer-titel"
                  >
                    A Collaborative Journey
                  </h3>

                  <ul>
                    <li>
                      <p>
                        It was during this quest that{" "}
                        <strong>Mr. Riyasi Mousoon</strong> came into the
                        picture. Recognizing the immense potential of{" "}
                        <strong>Mr. Jafran Jemal's</strong> vision, he
                        introduced him to <strong>Mr. Mirzook Faleel</strong>.
                        This pivotal connection marked the genesis of{" "}
                        <strong>Find Soulmate Pvt Ltd</strong>. With the shared
                        determination to make a lasting impact on the lives of
                        the Muslim community in Sri Lanka, these three
                        visionaries joined forces.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="footer-titel col-md-12 col-sm-12 col-xs-12">
                  <h3
                    style={{
                      textTransform: "uppercase",
                    }}
                    className="footer-titel"
                  >
                    Our Story
                  </h3>

                  <ul>
                    <li>
                      <p>
                        {" "}
                        The story of Find Soulmate Pvt Ltd is a testament to the
                        power of collaboration, innovation, and the pursuit of
                        meaningful connections. With Mr. Jafran Jemal's
                        transformative concept as the foundation, supported by
                        the expertise of Mr. Mirzook Faleel and the guidance of
                        Mr. Riyasi Mousoon, Find Soulmate Pvt Ltd came into
                        existence.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className=" footer-titel col-md-12 col-sm-12 col-xs-12">
                  <h3
                    style={{
                      textTransform: "uppercase",
                    }}
                    className="footer-titel"
                  >
                    Sharing Our Vision
                  </h3>

                  <ul>
                    <li>
                      <p>
                        We are proud to showcase the journey that led to the
                        creation of Find Soulmate Pvt Ltd. Our story represents
                        the dedication, vision, and collective efforts of
                        individuals from diverse backgrounds who shared a common
                        goal: to empower, inspire, and reshape the future of
                        companionship within the Muslim community. This
                        narrative is an essential part of who we are, and we
                        invite you to join us in realizing the potential of
                        love, connection, and new beginnings.
                      </p>
                    </li>
                  </ul>
                </div>
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
                        href="https://jjsoft-global-software-company.netlify.app"
                      >
                        jjsoft-global PVT LTD.
                      </a>
                    </p>
                    <p>
                      Environment-{process.env.NODE_ENV.toUpperCase()} | Version{" "}
                      {projectVersion}
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
