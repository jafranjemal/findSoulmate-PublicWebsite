import React, { Component, useState } from "react";
import shakeela from "./assets/images/6NeKCCvrsE3f.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import playstore from "./assets/images/play-store.png";
import appstore from "./assets/images/app-store.png";
import img1 from "./assets/images/1.jpg";
import img2 from "./assets/images/2.jpg";
import img3 from "./assets/images/3.jpg";
import img4 from "./assets/images/4.jpg";
import img5 from "./assets/images/5.jpg";
import img6 from "./assets/images/6.jpg";
import Popup from "./components/Popup";
import Register from "./Register";

const Body = () => {
  const [trigerStatus, setTrigerStatus] = useState(false);

  return (
    <div>
      <section id="services" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
              Our Services
            </h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s" />
          </div>
          {/* <img src={shakeela} alt="" /> */}
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div
                className="services-item wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <div className="icon">
                  {/* <i className="lni lni-cog" /> */}
                  <i className="fa-solid fa-users"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Profile creation and management </a>
                  </h3>
                  <p>
                    Allow users to create and manage their profiles, with
                    options to add details such as their location, age,
                    occupation, education, and interests. This will help other
                    users get to know them better and find potential matches
                    that align with their preferences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div
                className="services-item wow fadeInRight"
                data-wow-delay="0.6s"
              >
                <div className="icon">
                  <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Advanced search and match-making</a>
                  </h3>
                  <p>
                    Offer advanced search options that allow users to filter
                    potential matches based on their preferred criteria, such as
                    age, location, religion, education, and more. Additionally,
                    you could use machine learning algorithms to suggest matches
                    based on users' preferences and behavior.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div
                className="services-item wow fadeInRight"
                data-wow-delay="0.9s"
              >
                <div className="icon">
                  <i className="fa-solid fa-comments"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Chat and messaging</a>
                  </h3>
                  <p>
                    Enable users to communicate with each other through chat and
                    messaging features, with options for audio and video calls
                    as well. This will allow users to get to know each other
                    better and build deeper connections.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div
                className="services-item wow fadeInRight"
                data-wow-delay="1.2s"
              >
                <div className="icon">
                  <i className="fa-solid fa-user-lock"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Privacy and security</a>
                  </h3>
                  <p>
                    Ensure that the app is secure and that user data is
                    protected. Offer options for users to control who can view
                    their profile and who they communicate with.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div
                className="services-item wow fadeInRight"
                data-wow-delay="1.5s"
              >
                <div className="icon">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Wedding planning</a>
                  </h3>
                  <p>
                    Offer wedding planning services for couples who have found
                    their match through your app. This could include options to
                    book venues, hire photographers, order catering, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div
                className="services-item wow fadeInRight"
                data-wow-delay="1.8s"
              >
                <div className="icon">
                  <i className="fa-sharp fa-solid fa-face-smile-beam"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Success stories</a>
                  </h3>
                  <p>
                    Highlight successful matches and relationships that have
                    been formed through your app. This will encourage users to
                    trust your platform and give them hope that they too can
                    find their soulmate through your service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="about-area section-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xs-12 info">
              <div
                className="about-wrapper wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <div>
                  <div className="site-heading">
                    <p className="mb-3">Manage Statistics</p>
                    <h2 className="section-title">Why Use Find Soulmate?</h2>
                  </div>
                  <div className="content">
                    <p>
                      Finding your soulmate is one of the most important
                      journeys of your life. With so many options available, it
                      can be overwhelming to navigate the dating world and find
                      the perfect match. That's where Find Soulmate comes in.
                      Our mobile matrimony app is designed to make the process
                      of finding your soulmate easy, fun, and stress-free. With
                      advanced search algorithms and user-friendly features,
                      Find Soulmate helps you find potential matches based on
                      your preferences and interests. Whether you're looking for
                      someone who shares your religious beliefs, hobbies, or
                      values, we've got you covered. Plus, our chat and
                      messaging features allow you to get to know potential
                      matches better and build deeper connections. You can rest
                      assured that your privacy and security are our top
                      priorities, with options to control who can view your
                      profile and communicate with you. With Find Soulmate, you
                      can trust that you're in good hands and on the path to
                      finding your soulmate. Download our app today and start
                      your journey towards finding true love.
                    </p>
                    <a href="" className="btn btn-common mt-3">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-xs-12 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <img className="img-fluid" src="images/GldHjOUrtOif.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <section id="features" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
              Awesome Features
            </h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s" />
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="content-left">
                <div className="box-item wow fadeInLeft" data-wow-delay="0.3s">
                  <span className="icon">
                    <i className="fa-solid fa-user-pen"></i>
                  </span>
                  <div className="text">
                    <h4>Personalized profiles</h4>
                    <p>
                      Allow users to create personalized profiles with
                      information about their hobbies, interests, education, and
                      more. This will help potential matches get to know them
                      better and find compatible partners.
                    </p>
                  </div>
                </div>
                <div className="box-item wow fadeInLeft" data-wow-delay="0.6s">
                  <span className="icon">
                    <i className="fa-solid fa-filter"></i>
                  </span>
                  <div className="text">
                    <h4>Advanced search filters</h4>
                    <p>
                      Offer advanced search filters that allow users to filter
                      potential matches based on specific criteria such as age,
                      location, religion, education, and more. This will help
                      users find matches that align with their preferences.
                    </p>
                  </div>
                </div>
                <div className="box-item wow fadeInLeft" data-wow-delay="0.9s">
                  <span className="icon">
                    <i className="fas fa-comments"></i>
                  </span>
                  <div className="text">
                    <h4>Chat and messaging:</h4>
                    <p>
                      {" "}
                      Enable users to communicate with each other through chat
                      and messaging features, with options for audio and video
                      calls as well. This will allow users to get to know each
                      other better and build deeper connections.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="show-box wow fadeInUp" data-wow-delay="0.3s">
                <img src="images/nLXGinYmKAle.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="content-right">
                <div className="box-item wow fadeInRight" data-wow-delay="0.3s">
                  <span className="icon">
                    <i className="fas fa-user-check"></i>
                  </span>
                  <div className="text">
                    <h4>Verification and safety Features</h4>

                    <p>
                      {" "}
                      Implement verification and safety features such as phone
                      number verification, background checks, and moderation of
                      user-generated content. This will help users feel safe and
                      secure while using your app.
                    </p>
                  </div>
                </div>
                <div className="box-item wow fadeInRight" data-wow-delay="0.6s">
                  <span className="icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <div className="text">
                    <h4>In-app notifications</h4>
                    <p>
                      Send in-app notifications to users about new matches,
                      messages, and other important updates. This will keep
                      users engaged and encourage them to use your app
                      regularly.
                    </p>
                  </div>
                </div>
                <div className="box-item wow fadeInRight" data-wow-delay="0.9s">
                  <span className="icon">
                    <i className="fa-sharp fa-solid fa-crown"></i>
                  </span>
                  <div className="text">
                    <h4>Premium features</h4>
                    <p>
                      Offer premium features such as profile boosts, advanced
                      search filters, and enhanced privacy settings for users
                      who want to take their search for a soulmate to the next
                      level. This will help you generate revenue and offer more
                      value to your users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="section-padding bg-gray">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
              Reviews
            </h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s" />
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="team-item wow fadeInRight" data-wow-delay="0.2s">
                <div className="team-img">
                  <img className="img-fluid" src="images/man.jpeg" />
                </div>
                <div className="contetn">
                  <div className="info-text">
                    <h3>
                      <a href="#">Abdul Halidh</a>
                    </h3>
                    {/* <p>Front-end Developer</p> */}
                  </div>
                  <p>
                    "I was skeptical about online matrimony services, but Find
                    Soulmate has completely changed my mind. The app is safe and
                    secure, and I love that I can control who can see my profile
                    and communicate with me. I've already connected with a few
                    great matches and I'm looking forward to meeting more."{" "}
                  </p>
                  {/* <ul className="social-icons">
                  <li><a href="#"><i className="lni lni-facebook-filled" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="lni lni-twitter-filled" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="lni lni-instagram-filled" aria-hidden="true" /></a></li>
                </ul> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="team-item wow fadeInRight" data-wow-delay="0.4s">
                <div className="team-img">
                  <img className="img-fluid" src="images/girl.jpg" />
                </div>
                <div className="contetn">
                  <div className="info-text">
                    <h3>
                      <a href="#">Fathima Sarah</a>
                    </h3>
                    {/* <p>Product Designer</p> */}
                  </div>
                  <p>
                    "I've been using Find Soulmate for a few months now and I
                    couldn't be happier with the results. I've met several
                    amazing people and I'm excited to see where things go. The
                    app is easy to use and the advanced search filters make it
                    easy to find compatible matches. Highly recommend!"
                  </p>
                  {/* <ul className="social-icons">
                  <li><a href="#"><i className="lni lni-facebook-filled" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="lni lni-twitter-filled" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="lni lni-instagram-filled" aria-hidden="true" /></a></li>
                </ul> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="team-item wow fadeInRight" data-wow-delay="0.6s">
                <div className="team-img">
                  <img className="img-fluid" src="images/man1.jpg" alt="" />
                </div>
                <div className="contetn">
                  <div className="info-text">
                    <h3>
                      <a href="#">Mohammed Omar</a>
                    </h3>
                    {/* <p>Lead Designer</p> */}
                  </div>
                  <p>
                    "I've tried other matrimony services in the past, but Find
                    Soulmate is by far the best. The app is user-friendly and
                    the chat and messaging features make it easy to get to know
                    potential matches. I also appreciate the safety and
                    verification features - it's important to me to know that
                    I'm communicating with real people. Thanks Find Soulmate!"{" "}
                  </p>
                  {/* <ul className="social-icons">
                  <li><a href="#"><i className="lni lni-facebook-filled" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="lni lni-twitter-filled" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="lni lni-instagram-filled" aria-hidden="true" /></a></li>
                </ul> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="team-item wow fadeInRight" data-wow-delay="0.8s">
                <div className="team-img">
                  <img className="img-fluid" src="images/girl1.jpg" alt="" />
                </div>
                <div className="contetn">
                  <div className="info-text">
                    <h3>
                      <a href="#">Fathima Aisha</a>
                    </h3>
                    {/* <p>Lead Designer</p> */}
                  </div>
                  <p>
                    "As a busy professional, I don't have a lot of time to
                    devote to dating. That's why I love Find Soulmate - the app
                    makes it easy to find and connect with potential matches,
                    even when I'm on the go. I've already met a few great people
                    and I'm excited to see where things go."
                  </p>
                  {/* <ul className="social-icons">
                  <li><a href="#"><i className="lni lni-facebook-filled" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="lni lni-twitter-filled" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="lni lni-instagram-filled" aria-hidden="true" /></a></li>
                </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
              Pricing
            </h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s" />
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="table wow fadeInLeft" data-wow-delay="1.2s">
                <div className="icon-box">
                  <i className="fa-solid fa-face-smile"></i>
                </div>
                <div className="pricing-header">
                  <p className="price-value">
                    LKR5,000<span> /mo</span>
                  </p>
                </div>
                <div className="title">
                  <h3>Pro</h3>
                </div>
                <ul className="description">
                  <li>10 proposals free</li>
                  <li>1 Month Membership</li>
                  <li>Email support</li>
                  <li>Lifetime updates</li>
                </ul>
                <button className="btn btn-common">Buy Now</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 active">
              <div
                className="table wow fadeInUp"
                id="active-tb"
                data-wow-delay="1.2s"
              >
                <div className="icon-box">
                  <i className="fa-solid fa-face-grin-wide"></i>
                </div>
                <div className="pricing-header">
                  <p className="price-value">
                    LKR12,000<span> /3 month</span>
                  </p>
                </div>
                <div className="title">
                  <h3>Plus</h3>
                </div>
                <ul className="description">
                <li>10 proposals free</li>
                  <li>3 Month Membership</li>
                  <li>Email support</li>
                  <li>Lifetime updates</li>
                </ul>
                <button className="btn btn-common">Buy Now</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="table wow fadeInRight" data-wow-delay="1.2s">
                <div className="icon-box">
                  <i className="fa-solid fa-face-smile-beam"></i>
                </div>
                <div className="pricing-header">
                  <p className="price-value">
                    LKR30,000<span> /year</span>
                  </p>
                </div>
                <div className="title">
                  <h3>Premium</h3>
                </div>
                <ul className="description">
                <li>10 proposals free</li>
                  <li>1 Year Membership</li>
                  <li>Email support</li>
                  <li>Lifetime updates</li>
                </ul>
                <button className="btn btn-common">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial" className="testimonial section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div
                id="testimonials"
                className="owl-carousel wow fadeInUp"
                data-wow-delay="1.2s"
              >
                <div className="item">
                  <div className="testimonial-item">
                    <div className="img-thumb">
                      <img src="images/jcwSRgPeiitd.jpg" alt=""  />
                    </div>
                    <div className="info">
                      <h2>
                        <a href="#">David Smith</a>
                      </h2>
                      <h3>
                        <a href="#">Creative Head</a>
                      </h3>
                    </div>
                    <div className="content">
                      <p className="description">
                        Praesent cursus nulla non arcu tempor, ut egestas elit
                        tempus. In ac ex fermentum, gravida felis nec, tincidunt
                        ligula.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-item">
                    <div className="img-thumb">
                      <img src="images/ve7u8xPysbPl.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h2>
                        <a href="#">Domeni GEsson</a>
                      </h2>
                      <h3>
                        <a href="#">Awesome Technology co.</a>
                      </h3>
                    </div>
                    <div className="content">
                      <p className="description">
                        Praesent cursus nulla non arcu tempor, ut egestas elit
                        tempus. In ac ex fermentum, gravida felis nec, tincidunt
                        ligula.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-item">
                    <div className="img-thumb">
                      <img src="images/NdMhpdAJn5g1.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h2>
                        <a href="#">Dommini Albert</a>
                      </h2>
                      <h3>
                        <a href="#">Nesnal Design co.</a>
                      </h3>
                    </div>
                    <div className="content">
                      <p className="description">
                        Praesent cursus nulla non arcu tempor, ut egestas elit
                        tempus. In ac ex fermentum, gravida felis nec, tincidunt
                        ligula.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-item">
                    <div className="img-thumb">
                      <img src="images/WZLgPJzNUeb7.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h2>
                        <a href="#">Fernanda Anaya</a>
                      </h2>
                      <h3>
                        <a href="#">Developer</a>
                      </h3>
                    </div>
                    <div className="content">
                      <p className="description">
                        Praesent cursus nulla non arcu tempor, ut egestas elit
                        tempus. In ac ex fermentum, gravida felis nec, tincidunt
                        ligula.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="testimonial "
      >
        <img src={img1} style={{ width: 200, padding: 15 }}></img>
        <img src={img2} style={{ width: 200, padding: 15 }}></img>
        <img src={img3} style={{ width: 200, padding: 15 }}></img>
        <img src={img4} style={{ width: 200, padding: 15 }}></img>
        <img src={img5} style={{ width: 200, padding: 15 }}></img>
        <img src={img6} style={{ width: 200, padding: 15 }}></img>
      </div>
      <section id="cta" className="section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-6 col-xs-6 wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <div className="cta-text">
                <h4>Get 30 days free trial</h4>
                <p>
                  Upgrade to our 30-day premium subscription and enjoy exclusive
                  features to take your search for love to the next level. With
                  our premium subscription, you'll get access to advanced search
                  filters that allow you to narrow down your search and find
                  compatible matches faster. You'll also be able to see who has
                  viewed your profile and liked your photos, so you can connect
                  with potential matches who are interested in you.
                </p>
              </div>

              <br />
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
                }}
              >
                {/* <h1>Fill This Form </h1> */}
                <Register />
              </Popup>
            </div>

            <div
              className="col-lg-6 col-md-6 col-xs-6 text-right"
              data-wow-delay="0.3s"
            >
              <h3>Download Our App</h3>
              <p>Download App for Android and ios mobile phone.</p>
              <img src={playstore} style={{ width: 200, marginRight: 15 }} />
              <img src={appstore} style={{ width: 200, margin: 0 }} />
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="section-padding bg-gray">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
              Contact Us
            </h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s" />
          </div>
          <div
            className="row contact-form-area wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="contact-block">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                          required
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Email"
                          id="email"
                          className="form-control"
                          name="email"
                          required
                          data-error="Please enter your email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Subject"
                          id="msg_subject"
                          className="form-control"
                          required
                          data-error="Please enter your subject"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Your Message"
                          rows={7}
                          data-error="Write your message"
                          required
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="submit-button text-left">
                        <button
                          className="btn btn-common"
                          id="form-submit"
                          type="submit"
                        >
                          Send Message
                        </button>
                        <div id="msgSubmit" className="h3 text-center hidden" />
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-xs-12">
              <div className="map">
                <object
                  style={{ border: 0, height: 280, width: "100%" }}
                  data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.95262895865497!2d80.0027386988361!3d6.4310592967242854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22e840c202263%3A0x49e3206857031de1!2sA2%20Aluthgama%20-%20Mathugama%20Rd%2C%20Aluthgama%2012080!5e1!3m2!1sen!2slk!4v1685776949659!5m2!1sen!2slk"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Body;

