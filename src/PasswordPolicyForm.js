import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  FormHelperText,
  Box,
  Typography,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import {
  Visibility,
  VisibilityOff,
  CheckCircleOutline,
  CloudUpload,
  Delete,
  HighlightOff,
  CheckCircle,
  Cancel,
} from "@material-ui/icons";
import { CircleNotificationsTwoTone } from "@mui/icons-material";
import { addProfilePic, addStepTwo } from "./features/profile/Profile.slice";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginBottom: theme.spacing(4),
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: theme.spacing(2),
  },
  avatar: {
    width: "150px",
    height: "150px",
    cursor: "pointer",
  },
  fileInput: {
    display: "none",
  },
  uploadButton: {
    marginTop: theme.spacing(2),
  },
  removeButton: {
    marginTop: theme.spacing(1),
  },
  passwordRequirements: {
    marginTop: theme.spacing(2),
  },
  passwordStrength: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
}));
const initialState = {
   
  mobile: 0,
  email: "",   
  whatsapp: 0,
  password:"",
  profilePicture:null
   
};
const PasswordPolicyForm = ( ) => {
  const classes = useStyles();
  const { stepOne, isSaved, stepTwo , profilePicture } = useSelector((state) => state.profile);

  const [values, setValues] = useState(stepTwo);

  const [password, setPassword] = useState(stepTwo.password);
  const [confirmPassword, setConfirmPassword] = useState(stepTwo.confirmPassword);
  const [showPassword, setShowPassword] = useState(false);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isMinimum8Digits, setIsMinimum8Digits] = useState(false);
  const [photo, setPhoto] = useState(profilePicture);

  const dispatch = useDispatch();

  function trimValue(value) {
    if (typeof value === 'string') {
      return value.trim();
    }
    return value;
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValues({
      ...values,
      [name]: trimValue(value),
    });
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsUppercase(/[A-Z]/.test(value));
    setIsNumber(/[0-9]/.test(value));
    setIsMinimum8Digits(value.length >= 8);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordValid = () => {
    return isUppercase && isNumber && isMinimum8Digits;
  };

  const isConfirmPasswordValid = () => {
    return password === confirmPassword;
  };

  const getPasswordRequirementsStatus = () => {
    return [
      { label: "At least one uppercase letter", isSatisfied: isUppercase },
      { label: "At least one number", isSatisfied: isNumber },
      { label: "Minimum 8 characters", isSatisfied: isMinimum8Digits },
    ];
  };

  const getPasswordStrengthColor = () => {
    if (!password) {
      return "red";
    }
    if (isPasswordValid()) {
      return "green";
    }
    return "yellow";
  };


  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
  };

  useEffect(()=>{

    const data = {...values,   password , confirmPassword , isConfirmPasswordValid: isConfirmPasswordValid()}
    console.log({data})

    dispatch(addStepTwo(data))
    dispatch(addProfilePic(photo))
    
  },[values , password , photo, confirmPassword])

  return (
    <div className={classes.formContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.avatarContainer}>
            <label htmlFor="photo">
              <Avatar
                alt="Selected Photo"
                src={photo ? URL.createObjectURL(photo) : ""}
                className={classes.avatar}
              />
            </label>
            <input
              accept="image/*"
              id="photo"
              type="file"
              className={classes.fileInput}
              onChange={handlePhotoChange}
            />

            <FormHelperText component="span">
              {photo ? "" : "Upload a photo"}
            </FormHelperText>

            {photo && (
              <div className={classes.removeButtonContainer}>
                <IconButton
                  color="secondary"
                  className={classes.removeButton}
                  onClick={handleRemovePhoto}
                >
                  <Delete />
                </IconButton>
                <FormHelperText component="span">Remove photo</FormHelperText>
              </div>
            )}
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <TextField
            id="outlined-basic"
            label="Mobile"
            variant="outlined"
            value={values.mobile}
            onChange={onChange}
            name="mobile"
            type="number"
            
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <TextField
            id="outlined-basic"
            label="WhatsApp Number"
            variant="outlined"
            value={values.whatsapp}
            onChange={onChange}
            name="whatsapp"
            type="number"

            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={values.email}
            onChange={onChange}
            name="email"
            fullWidth
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              error={!isPasswordValid()}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormHelperText className={classes.passwordRequirements}>
              {getPasswordRequirementsStatus().map((requirement, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  color={requirement.isSatisfied ? "green" : "red"}
                  style={{
                    textDecoration: requirement.isSatisfied
                      ? " line-through"
                      : "none",
                  }}
                >
                  {requirement.isSatisfied ? (
                    <CheckCircle
                      style={{ marginRight: "4px", color: "green" }}
                    />
                  ) : (
                    <Cancel style={{ marginRight: "4px", color: "red" }} />
                  )}
                  {requirement.label}
                </Box>
              ))}
            </FormHelperText>
          </FormControl>
        </Grid>

        {password !== "" && (
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                id="confirm-password"
                label="Confirm Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                error={!isConfirmPasswordValid()}
                helperText={
                  isConfirmPasswordValid() ? (
                    <div style={{ color: "green", marginTop: 10 }}>
                      {" "}
                      <CheckCircle color="success" /> Password and Confirmed
                    </div>
                  ) : (
                    <div style={{ color: "red", marginTop: 10 }}>
                      {" "}
                      <Cancel color="error" /> Password and Confirm Password do
                      not match
                    </div>
                  )
                }
              />

              {/* {isPasswordValid() ? "Password is valid" : "Password is invalid"} */}
            </FormControl>
          </Grid>
        )}
      </Grid>
      <Box className={classes.passwordStrength}>
        <Typography
          variant="body2"
          style={{ color: getPasswordStrengthColor() }}
        ></Typography>
      </Box>
    </div>
  );
};

export default PasswordPolicyForm;
