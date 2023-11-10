import React, { Component, useEffect, useRef, useState } from "react";
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
import { Button } from "@mui/material";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EventRegistrationForm from "./EventRegistrationForm";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  Event,
  AccessTime,
  LocationOn,
  MonetizationOn,
  Person,
} from "@material-ui/icons";
import { removeError } from "./features/profile/Profile.slice";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  list: {
    marginBottom: theme.spacing(1),
  },
}));

const Body = () => {
  const classes = useStyles();
  const [trigerStatus, setTrigerStatus] = useState(false);
  const [eventRegisterForm, setEventRegisterForm] = useState(false);
  const { stepOne, isSaved, stepTwo, registerError, errorMsg, profilePicture } =
    useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const containerRef = useRef(null);

  useEffect(() => {
    if (trigerStatus) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "relative";
    }
  }, [trigerStatus]);

  useEffect(() => {
    const container = containerRef.current;
    let scroll = 0;

    const slideImages = () => {
      scroll += 1;
      container.scrollLeft = scroll;

      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
        scroll = 0;
      }

      requestAnimationFrame(slideImages);
    };

    const animationId = requestAnimationFrame(slideImages);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  function ScrollUp() {
    window.scrollTo(0, 0);
  }

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
      <section id="events" className="section-padding bg-gray">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
              Up coming Events
            </h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s" />
          </div>

          <Grid
            style={{
              backgroundColor: "white",
              boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
            }}
            container
          >
            <Grid item xs={12} sm={6} md={6}>
              <div
                style={{
                  width: "100%",
                  height: 600,

                  boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
                }}
              >
                <img
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
                  }}
                  src="https://wallpapers.com/images/hd/couple-holding-hand-pictures-5zb19dei61erkrlv.jpg"
                  alt="Couple"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  padding: 20,
                }}
              >
                <h1
                  style={{
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  Pre marital & Marital One Day workshop
                </h1>
                <List className={classes.list}>
                  <ListItem>
                    <ListItemIcon>
                      <MonetizationOn color="error" />
                    </ListItemIcon>
                    <ListItemText primary="Price: " secondary="FREE" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Person color="error" />
                    </ListItemIcon>
                    <ListItemText
                      secondary="Ash. M.N.Aalif Ali
Islahi | B.A. | Psychological Counselor | Al-Quran & Science Researcher | IHRDP - Pakistan"
                      primary="Resource Person: "
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LocationOn color="error" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Venue: "
                      secondary="Jamiah Naleemiah, Beruwala, Sri Lanka"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Event color="error" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Date: "
                      secondary="January 16th, 2024"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AccessTime color="error" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Time: "
                      secondary="8.00 am to 1.00 pm"
                    />
                  </ListItem>
                </List>
                <Button
                  onClick={() => setEventRegisterForm(true)}
                  variant="contained"
                  style={{ boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)" }}
                >
                  Register Now
                </Button>
              </div>
            </Grid>
          </Grid>

          <Popup
            trigger={eventRegisterForm}
            popupClose={() => {
              setEventRegisterForm(false);
            }}
          >
            {/* <h1>Fill This Form </h1> */}
            <EventRegistrationForm />
          </Popup>
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
                <img
                  className="team-img"
                  src="https://photo8.wambacdn.net/90/91/02/1792201909/2110084767_huge.jpg?hash=bzAVizl95S6FWPJ2mEtpQg&expires=64060578000&updated=1648736384"
                />

                <div className="content">
                  <div className="info-text">
                    <h3>
                      <a href="#">Abdul Halidh</a>
                    </h3>
                    {/* <p>Front-end Developer</p> */}
                  </div>
                  <p>
                    "I'm Abdul Halidh, the Saudi-based engineer, giving two
                    thumbs up to Find Soulmate. If you're looking for a fresh
                    start like me, tap that download button – your next chapter
                    could start real soon. Cheers to new beginnings! 🌟
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
                <img
                alt="as"
                  className="team-img"
                  src="https://c.files.bbci.co.uk/C333/production/_115517994_naziapic.jpg"
                />

                <div className="content">
                  <div className="info-text">
                    <h3>
                      <a href="#">Nadha Mariyam  </a>
                    </h3>
                    {/* <p>Product Designer</p> */}
                  </div>
                  <p>
                    As a divorced mom with my kid, finding love felt tough. Find
                    Soulmate changed that. I met great people, app's easy, and
                    filters helped. It's a blessing for Muslims, uniting us. Big
                    thanks to creators, you made my prayers real. Recommending
                    to single parents for real companionship. Find Soulmate,
                    you're a dream come true
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
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              className="team-item"
              data-wow-delay="0.6s"
            >
              <img className="team-img" src="images/man1.jpg" alt="" />

              <Grid item xs={12} className="content">
                <div className="info-text">
                  <h3>
                    <a href="#">Mohammed Omar</a>
                  </h3>
                  {/* <p>Lead Designer</p> */}
                </div>
                <p>
                  "I've tried other matrimony services in the past, but Find
                  Soulmate is by far the best. The app is user-friendly and the
                  chat and messaging features make it easy to get to know
                  potential matches. I also appreciate the safety and
                  verification features - it's important to me to know that I'm
                  communicating with real people. Thanks Find Soulmate!"{" "}
                </p>
                {/* <ul className="social-icons">
                  <li><a href="#"><i className="lni lni-facebook-filled" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="lni lni-twitter-filled" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="lni lni-instagram-filled" aria-hidden="true" /></a></li>
                </ul> */}
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              className="team-item  "
              data-wow-delay="0.8s"
            >
              <img
                className="team-img"
                src="https://www.fibhaber.com/images/upload/DSC_0055.jpg"
                alt=""
              />

              <div className="content">
                <div className="info-text">
                  <h3>
                    <a href="#">Fathima Sithi Fowsiya</a>
                  </h3>
                  {/* <p>Lead Designer</p> */}
                </div>
                <p>
                  "As a busy principal, time is scarce for partner searching.
                  Find Soulmate simplifies it, even on the go. After losing my
                  husband to COVID-19, life changed. Find Soulmate gave hope in
                  this new phase. Balancing widowhood and being a principal is
                  tough, but Find Soulmate brings positivity. It lets me explore
                  companionship again. Excited to see where these connections
                  lead. Find Soulmate smooths this path, offering happiness once
                  more."
                </p>
                {/* <ul className="social-icons">
                  <li><a href="#"><i className="lni lni-facebook-filled" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="lni lni-twitter-filled" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="lni lni-instagram-filled" aria-hidden="true" /></a></li>
                </ul> */}
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
      <section
        style={{ display: "none" }}
        id="pricing"
        className="section-padding"
      >
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
        <div className="container"></div>
      </section>

      <div
        ref={containerRef}
        style={{
          display: "flex",
          justifyContent: "center",
          overflow: "scroll",
        }}
        className="testimonial "
      >
        <img alt="" src={img1} style={{ width: 200, padding: 15 }}></img>
        <img alt="" src={img2} style={{ width: 200, padding: 15 }}></img>
        <img alt="" src={img3} style={{ width: 200, padding: 15 }}></img>
        <img alt="" src={img4} style={{ width: 200, padding: 15 }}></img>
        <img alt="" src={img5} style={{ width: 200, padding: 15 }}></img>
        <img alt="" src={img6} style={{ width: 200, padding: 15 }}></img>
      </div>
      <section id="download" className="section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-12 col-xs-12 wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <div className="cta-text">
                <h4>Get 100 days free trial</h4>
                <p>
                  Elevate your experience by opting for our 100-day premium
                  subscription, which offers an array of exclusive features
                  designed to elevate your quest for companionship. Through our
                  premium subscription, you will gain entry to a spectrum of
                  advanced search filters that streamline your search process,
                  facilitating the discovery of compatible matches at an
                  accelerated pace. Moreover, you will gain the privilege to
                  track those who have engaged with your profile and exhibited
                  interest in your photos, empowering you to forge meaningful
                  connections with potential matches who share a genuine
                  enthusiasm for connecting
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
                  if (registerError) {
                    //clear msg
                    dispatch(removeError());
                  }
                }}
              >
                {/* <h1>Fill This Form </h1> */}
                <Register
                  stepChanged={ScrollUp}
                  modelClosed={() => setTrigerStatus(false)}
                />
              </Popup>
            </div>

            <div className="download-container">
              <h3>Download Our App</h3>
              <p>
                Experience the Full Potential: Access Our App on Android and iOS
                Devices
              </p>
              <div style={{ cursor: "pointer" }} className="download-buttons">
                <img
                  alt="playstore"
                  onClick={() => {
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.jjsoft.findsoulmate.v2muslim",
                      "_blank"
                    );
                  }}
                  src={playstore}
                />
                <img
                  alt="appStore"
                  onClick={() => {
                    window.open(
                      "https://apps.apple.com/us/app/find-soulmate-nikah-service/id6471280459",
                      "_blank"
                    );
                  }}
                  src={appstore}
                />
              </div>
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
            <div
              style={{ marginBottom: 20 }}
              className="col-lg-7 col-md-12 col-sm-12"
            >
              <div className="contact-block">
                <form
                  id="contactForm"
                  action="https://formspree.io/f/mrgwzrnd"
                  method="POST"
                >
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
                          name="msg_subject"
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
                          name="message"
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
                  data="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4047213.2839410105!2d80.70625!3d7.857685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x27ca9a9ee5667a55%3A0x945ff0dcc5826f68!2sFind%20Soulmate%20Pvt%20Ltd!5e0!3m2!1sen!2slk!4v1699612292749!5m2!1sen!2slk"
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
