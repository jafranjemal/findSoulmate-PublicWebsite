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

  return props.trigger ? (
    <div className="modal-overlay">
      <div id="targetElement" className="popup-inner">
        <div style={{ padding: 20, position:'relative' }}>
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
        <div id="popup" className="popup-content">{props.children}</div>
      </div>
    </div>
  ) : null;
}

export default Popup;
