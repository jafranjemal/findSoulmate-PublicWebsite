import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Avatar, Grid, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
const useStyles = makeStyles({
  formContainer: {
    // Add any styling you want for the form container
    boxShadow: "0 4px 10px 0 rgba(0, 0, 0, .25)",
  },
});

const Summary = () => {
  const classes = useStyles();

  const { stepOne, stepTwo, profilePicture } = useSelector(
    (state) => state.profile
  );

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
        <div>
          
        </div>
        <Avatar
          src={profilePicture ? URL.createObjectURL(profilePicture) : ""}
          sx={{ width: 150, height: 150 }}
        />
        <h1 style={{ fontSize: 20, marginTop: 10 }}>
          {stepOne.fullName || "****"}{" "}
        </h1>
        <h2
          style={{
            fontSize: 16,
            justifyContent: "flex-start",
            width: "100%",
           
            backgroundColor:'red',
            padding:10,
            color:'white'
          }}
        >
          About Me
        </h2>
        <Paper style={{width:'100%', padding:10}}>
          <p>{stepOne.aboutMe || "****"}</p>
        </Paper>
        <br />
        <h2
          style={{
            fontSize: 16,
            justifyContent: "flex-start",
            width: "100%",
           
            backgroundColor:'red',
            padding:10,
            color:'white'
          }}
        >
          Personal Details
        </h2>
        {/* <Grid container>
          <Grid xs={12} sm={6} md={6} item>
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

          <Grid sm={6} md={6} item>
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
              <b>Date of Birth</b> -{" "}
              {new Date(stepOne.dob).toDateString() || "****"}
            </p>
          </Grid>
        </Grid> */}

       
    <TableContainer component={Paper}>
      <Table aria-label="profile information">
        <TableBody>
          <TableRow>
            <TableCell align="right">
              <b>Full Name</b>
            </TableCell>
            <TableCell>{stepOne.fullName || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>Address</b>
            </TableCell>
            <TableCell>{stepOne.address || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>Country</b>
            </TableCell>
            <TableCell>{stepOne.country || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>Province</b>
            </TableCell>
            <TableCell>{stepOne.province || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>District</b>
            </TableCell>
            <TableCell>{stepOne.district || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>Town Area</b>
            </TableCell>
            <TableCell>{stepOne.townArea || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>Born Place</b>
            </TableCell>
            <TableCell>{stepOne.bornPlace || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>NIC</b>
            </TableCell>
            <TableCell>{stepOne.nic || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>Gender</b>
            </TableCell>
            <TableCell>{stepOne.gender || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>Age</b>
            </TableCell>
            <TableCell>{stepOne.age || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>Occupation</b>
            </TableCell>
            <TableCell>{stepOne.occupation || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>Skin Complexion</b>
            </TableCell>
            <TableCell>{stepOne.complexion || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>Hair Color</b>
            </TableCell>
            <TableCell>{stepOne.hairColor || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>Eye Color</b>
            </TableCell>
            <TableCell>{stepOne.eyeColor || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>Height</b>
            </TableCell>
            <TableCell>{stepOne.height || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>Weight</b>
            </TableCell>
            <TableCell>{stepOne.weight || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>Marriage Status</b>
            </TableCell>
            <TableCell>{stepOne.marriageStatus || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>Date of Birth</b>
            </TableCell>
            <TableCell>{new Date(stepOne.dob).toDateString() || "****"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        <br />
        <h2
          style={{
            fontSize: 16,
            justifyContent: "flex-start",
            width: "100%",
           
            backgroundColor:'red',
            padding:10,
            color:'white'
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

<TableContainer component={Paper}>
      <Table aria-label="profile information">
        <TableBody>
          <TableRow>
            <TableCell align="right">
              <b>Mobile Number</b>
            </TableCell>
            <TableCell>{stepTwo.mobile || "****"}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell align="right">
              <b>WhatsApp Number</b>
            </TableCell>
            <TableCell>{stepTwo.whatsapp || "****"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <b>Email</b>
            </TableCell>
            <TableCell>{stepTwo.email || "****"}</TableCell>
          </TableRow>
          </TableBody>
          </Table>
          </TableContainer>
 
        </div>
      </Paper>
    </div>
  );
};

export default Summary;
