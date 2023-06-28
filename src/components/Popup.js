import React from "react";
import "../assets/css/Popup.css";
import { Button } from "@mui/material";
import { IconButton } from "@material-ui/core";
import { Cancel, Fingerprint } from "@material-ui/icons";

function Popup(props) {
  const closeButtonStyle = {
    position: "absolute",
    top: "20px",
    right: "10px",
  };
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div style={{ padding: 20 }}>
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

        <div className="popup-content">{props.children}</div>
      </div>
    </div>
  ) : null;
}

export default Popup;
