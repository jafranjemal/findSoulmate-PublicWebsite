import React, { useEffect, useRef } from "react";
import "../assets/css/Popup.css";
import { Button } from "@mui/material";
import { IconButton } from "@material-ui/core";
import { Cancel, Fingerprint } from "@material-ui/icons";

function Popup(props) {
  const targetRef = useRef(null);

  const handleScrollClick = () => {
    const targetPosition = targetRef.current.getBoundingClientRect().top;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "1%",
    right: "1%",
  };

  function openWhatsApp() {
    const phoneNumber = "94785224830"; // Your WhatsApp number
    const message = "I need help with registration."; // Message to send

    // Construct the WhatsApp URL
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in a new tab
    window.open(url, "_blank");
  }

  return props.trigger ? (
    <div className="modal-overlay">
      <div id="targetElement" className="popup-inner">
        <div style={{ padding: 20, position: "relative" }}>
          <IconButton
            style={closeButtonStyle}
            size="medium"
            onClick={() => props.popupClose(false)}
            aria-label="fingerprint"
            color="secondary"
          >
            <Cancel style={{ fontSize: 35 }} />
          </IconButton>
        </div>
        <div id="popup" className="popup-content">
          {props.children}
        </div>

        <div>
        <p>
          Contact our support and book a registration guide via WhatsApp screen
          sharing process.
        </p>
        <a href="https://wa.me/94785224830?text=Hello%2C%20I%20need%20assistance%20with%20registering.%20Can%20you%20help%20me%20book%20a%20registration%20guide%3F" style={{ textDecoration: "none" }}>
 
          <button
            style={{
              backgroundColor: "#25d366",
              color: "white",
              fontWeight: "bold",
              padding: "10px 20px",
              border: "none",
              borderRadius: 5,
            }}
          >
            <i className="fab fa-whatsapp" style={{ marginRight: 10 }} />
            Book Now Registration Guide
          </button>
        </a>
      </div>
      </div>
      <div></div>

    
    </div>
  ) : null;
}

export default Popup;
