import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Avatar, Grid, Paper } from "@mui/material";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  formContainer: {
    // Add any styling you want for the form container
    boxShadow: "0 4px 10px 0 rgba(0, 0, 0, .25)",
  },
});

const Summary = () => {
  const classes = useStyles();

  const {stepOne, stepTwo , profilePicture}= useSelector(state=> state.profile)

  return (
    <div className={classes.formContainer}>
      <Paper
        elevation={3}
        style={{
          padding: 15,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          boxShadow: "0 4px 10px 0 rgba(0, 0, 0, .25)",
        }}
      >
        
        <Avatar
          src={ profilePicture ? URL.createObjectURL(profilePicture) : ""
          }
          sx={{ width: 150, height: 150 }}
        />
        <h1 style={{ fontSize: 20, marginTop: 10 }}>{stepOne.fullName || "****"} </h1>
        <h2
          style={{
            fontSize: 16,
            justifyContent: "flex-start",
            width: "100%",
            textDecoration: "underline",
          }}
        >
          About
        </h2>
        <p>
        {stepOne.aboutMe || "****"}
        </p>
        <br />
        <h2
          style={{
            fontSize: 16,
            justifyContent: "flex-start",
            width: "100%",
            textDecoration: "underline",
          }}
        >
          Personal Details
        </h2>
        <Grid
        container
           
        >
          <Grid xs={12} sm={6} md={6} item >
            <p>
              <b>Full Name</b> - {stepOne.fullName || "****"}
            </p>
            <p>
              <b>Address</b> -{stepOne.address || "****"}
            </p>
            <p>
              <b>Country</b> - {stepOne.country || "****"}
            </p>
            <p>
              <b>Province</b> - {stepOne.province || "****"}
            </p>
            <p>
              <b>District</b> - {stepOne.district || "****"}
            </p>
            
            <p>
              <b>Town Area</b> - {stepOne.townArea || "****"}
            </p>
            <p>
              <b>Born Place</b> - {stepOne.bornPlace || "****"}
            </p>
            <p>
              <b>NIC</b> - {stepOne.nic || "****"}
            </p>
            <p>
              <b>Gender</b>- {stepOne.gender || "****"}
            </p>
          </Grid>

          <Grid sm={6} md={6} item >
            <p>
              {" "}
              <b>Age</b> - {stepOne.age || "****"}
            </p>
            <p>
              {" "}
              <b>Occupation</b> - {stepOne.occupation || "****"}
            </p>
            <p>
              {" "}
              <b>Skin Complexion</b> - {stepOne.complexion || "****"}
            </p>
            <p>
              {" "}
              <b>Hair Color</b> - {stepOne.hairColor || "****"}
            </p>
            <p>
              {" "}
              <b>Eye Color</b> - {stepOne.eyeColor || "****"}
            </p>
            <p>
              {" "}
              <b>Height</b> - {stepOne.height || "****"}
            </p>
            <p>
              {" "}
              <b>Weight</b> - {stepOne.weight || "****"}
            </p>
            <p>
              {" "}
              <b>Marriage Status</b> - {stepOne.marriageStatus || "****"}
            </p>
            <p>
              {" "}
              <b>Date of Birth</b> - {new Date(stepOne.dob ).toDateString()|| "****"}
            </p>
          </Grid>
        </Grid>
        <br />
        <h2
          style={{
            fontSize: 16,
            justifyContent: "flex-start",
            width: "100%",
            textDecoration: "underline",
          }}
        >
          Profile Details
        </h2>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ width: "100%" }}>
            <p>
              <b>Mobile Number</b> - {stepTwo.mobile || "****"}
            </p>
            <p>
              <b>WhatsApp Number</b> - {stepTwo.whatsapp || "****"}
            </p>
            <p>
              <b>Email</b> - {stepTwo.email || "****"}
            </p>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Summary;
