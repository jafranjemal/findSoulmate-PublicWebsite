import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import { FormControl, InputLabel, useMediaQuery } from "@mui/material";
import DropBox from "./components/DropBox/DropBox";

import PasswordPolicyForm from "./PasswordPolicyForm";
import {
  Cancel,
  FeaturedPlayList,
  PermContactCalendar,
  PersonAdd,
  VerifiedUser,
  VerifiedUserRounded,
} from "@material-ui/icons";
import { Summarize } from "@mui/icons-material";
import Summary from "./Summary";
import { useDispatch, useSelector } from "react-redux";
import {
  addStepOne,
  clearAll,
  removeError,
  saveProfile,
} from "./features/profile/Profile.slice";
import AlertBox from "./components/Alert/AlertBox";
import {
  provinceList,
  getDistrictList,
  cityList,
} from "get-srilanka-districts-cities";
import DropBoxWithColor from "./components/DropBox/DropBoxWithColor";
import moment from "moment/moment";
import { useTheme } from "@mui/material";
import API from "./API";
import { extractGenderAndDOB } from "./NicExtractor";
import { CountryList } from "./assets/CountryList";
import { doesSectionFormatHaveLeadingZeros } from "@mui/x-date-pickers/internals/hooks/useField/useField.utils";
import VerificationDetails from "./components/VerificationDetails";

const steps = ["Personal Details", "Profile Details", "Summary"];

const initialState = {
  fullName: "",
  address: "",
  country: "Sri Lanka",
  province: "",
  district: "",
  city: "",
  townArea: "",
  bornPlace: "",
  gender: "Male",
  dob: "",
  nic: "",

  mobile: 0,
  email: "",
  complexion: "fair",
  weight: 0,
  height: 0,
  hairColor: "black",
  eyeColor: "black",
  marriageStatus: "un-married", // "un-married"
  occupation: "",
  whatsapp: 0,
  aboutMe: "",
};

export default function Register(props) {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const { stepOne, isSaved, stepTwo, registerError, errorMsg, profilePicture } =
    useSelector((state) => state.profile);

  const [values, setValues] = useState(stepOne);
  const [dob, setDOB] = useState(stepOne.dob);
  const [provinces, setProvinceList] = useState(
    provinceList()[0].map((x) => ({ text: x, value: x }))
  );
  const [districts, setDistrictList] = useState([]);
  const [cityLists, setCityList] = useState([]);
  const msg =
    "According to Sri Lankan law, the legal age of majority is 18 years. Please note that certain rights and responsibilities may be applicable only to individuals who have reached this age";

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [countryList, setCountryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [prevDOB, setPrevDOB] = useState(values.dob);
  const currentDate = new Date();
  const maxDate = new Date(currentDate.getFullYear() - 17, currentDate.getMonth(), currentDate.getDate());

  useEffect(() => {
    if (values.dob !== prevDOB) {
      setPrevDOB(values.dob);
    }
  }, [values.dob, prevDOB]);


  useEffect(() => {
    ScrollToTopOnMount();
    props.stepChanged();
  }, [activeStep, props]);

  function ScrollToTopOnMount() {
    window.scrollTo(0, 0); // Scroll to the top of the page
    document.getElementById("popup").scrollIntoView();
  }

  useEffect(() => {
    const formattedCountries = CountryList.map((country) => ({
      value: country.name.common,
      text: country.name.common,
    })).sort((a, b) => a.value.localeCompare(b.value)); // Sorting in alphabetical order
    setCountryList(formattedCountries);
  }, []);

  useEffect(() => {
    if (values.province && values.province !== "") {
      const city = cityList(values.province, values.district).map((y) =>
        y.map((l) => ({
          text: l,
          value: l,
        }))
      );
      console.log(city[0]);
      setCityList(city[0]);
    }
  }, [values.district]);

  useEffect(() => {
    if (values.province && values.province !== "") {
      const distr = getDistrictList(values.province).map((y) =>
        y.map((l) => ({
          text: capitalizeText(l),
          value: l,
        }))
      );
      console.log(distr);
      setDistrictList(distr[0]);
    }
  }, [values.province]);

  function capitalizeText(text) {
    // Split the input text into words
    const words = text.split(" ");

    // Capitalize the first character of each word
    const capitalizedWords = words.map((word) => {
      // Ensure the word is not an empty string
      if (word) {
        // Capitalize the first character and convert the rest to lowercase
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return "";
    });

    // Join the capitalized words back together
    return capitalizedWords.join(" ");
  }

  const dispatch = useDispatch();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = async () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep === 0) {
      // values.dob = dob;
      const today = moment();
      const age = today.diff(dob, "years");

      console.log("Age:", age);
      if (age <= 17 || values.gender ==="") return alert(msg);
      // Display the calculated age
      const data = { ...values, dob, age };
      dispatch(addStepOne(data));
    }

    //final steps
    if (activeStep === 2) {
      if (!stepOne.fullName || stepOne.fullName === "")
        return alert("Full Name Cannot be empty, Please enter full name first");
      if (!stepOne.address || stepOne.address === "")
        return alert("Address Cannot be empty, Please enter address first");
      if (!stepOne.country || stepOne.country === "")
        return alert("Country Cannot be empty, Please enter Country first");
      if (!stepOne.province || stepOne.province === "")
        return alert("Province Cannot be empty, Please enter province first");
      if (!stepOne.district || stepOne.district === "")
        return alert("District Cannot be empty, Please enter District first");
      if (!stepOne.townArea || stepOne.townArea === "")
        return alert("Town/City Cannot be empty, Please enter Town/City first");
      if (!stepOne.bornPlace || stepOne.bornPlace === "")
        return alert(
          "Born Place Cannot be empty, Please enter Born Place first"
        );
      if (!stepOne.nic || stepOne.nic === "")
        return alert("NIC Cannot be empty, Please enter NIC first");
      if (!stepOne.gender || stepOne.gender === "")
        return alert("Gender Cannot be empty, Please enter Gender first");
      if (!stepOne.dob || stepOne.dob === "")
        return alert(
          "Date of Birth Cannot be empty, Please enter Date of Birth first"
        );

      const today = moment();
      const age = today.diff(dob, "years");

      if (age <= 17) return alert(msg);
      if (!stepOne.occupation || stepOne.occupation === "")
        return alert(
          "Occupation Cannot be empty, Please enter Occupation first"
        );
      if (!stepOne.occupationCountry || stepOne.occupationCountry === "")
        return alert(
          "Occupation Country Cannot be empty, Please enter Occupation Country first"
        );
      if (!stepOne.complexion || stepOne.complexion === "")
        return alert(
          "Complexion Cannot be empty, Please enter Complexion first"
        );
      if (!stepOne.hairColor || stepOne.hairColor === "")
        return alert(
          "Hair Color Cannot be empty, Please enter Hair Color first"
        );
      if (!stepOne.eyeColor || stepOne.eyeColor === "")
        return alert("EyeColor Cannot be empty, Please enter EyeColor first");
      if (!stepOne.height || stepOne.height === "")
        return alert("Height Cannot be empty, Please enter Height first");
      if (!stepOne.weight || stepOne.weight === "")
        return alert("Weight Cannot be empty, Please enter Weight first");
      if (!stepOne.marriageStatus || stepOne.marriageStatus === "")
        return alert(
          "Marriage Status Cannot be empty, Please enter Marriage Status first"
        );

      if (stepOne.gender === "Female" && stepOne.marriageStatus === "married") {
        return alert(
          "Marital Status cannot be set as 'Married' for females. Polygamy is only permissible for males. Kindly choose a different Marital Status."
        );
      }
      if (stepOne.gender === "Female" && stepOne.marriageStatus === "widower") {
        return alert(
          "Marital Status cannot be set as 'widower' for females. Kindly choose a different Marital Status."
        );
      }

      if (!stepOne.aboutMe || stepOne.aboutMe === "")
        return alert("AboutMe Cannot be empty, Please enter AboutMe first");

      //step 2
      if (!stepTwo.confirmPassword || stepTwo.confirmPassword === "")
        return alert("Password is not matched");
      if (!stepTwo.password || stepTwo.password === "")
        return alert("Password Cannot be empty, Please enter Password first");
      if (!stepTwo.mobile || stepTwo.mobile === "")
        return alert("Mobile Cannot be empty, Please enter Mobile first");
      if (!stepTwo.whatsapp || stepTwo.whatsapp === "")
        return alert("Whatsapp Cannot be empty, Please enter Whatsapp first");
      if (!stepTwo.isTermsChecked)
        return alert("You must accept the terms and conditions.");

      const email = stepTwo.email;
      const mobile = stepTwo.mobile;
      const whatsapp = stepTwo.whatsapp;

      let profilePicturesArray = [
        {
          profilePictureType: "Profile",
          profilePicture:
            "https://st2.depositphotos.com/2101611/9885/v/450/depositphotos_98850502-stock-illustration-man-silhouette-icon-with-question.jpg",
        },
      ];

      setLoading(true);

      if (profilePicture !== null) {
        const formData = new FormData();
        formData.append("image", profilePicture);
        await API.post("/uploadImage", formData).then((x) => {
          profilePicturesArray = [
            {
              profilePictureType: "Profile",
              profilePicture: x.data,
            },
          ];
        });
      }

      const save_data = {
        fullName: stepOne.fullName,
        address: stepOne.address,
        country: stepOne.country,
        province: stepOne.province,
        district: stepOne.district,
        city: stepOne.townArea,
        townArea: stepOne.townArea,
        bornPlace: stepOne.bornPlace,
        dob: stepOne.dob,
        gender: stepOne.gender,
        nic: stepOne.nic,
        age: stepOne.age,
        complexion: stepOne.complexion,
        weight: stepOne.weight,
        height: stepOne.height,
        hairColor: stepOne.hairColor,
        eyeColor: stepOne.eyeColor,
        marriageStatus: stepOne.marriageStatus,
        occupation: stepOne.occupation,
        occupationCountry: stepOne.occupationCountry,

        //step two
        mobile: stepTwo.mobile,
        email: stepTwo.email,
        password: stepTwo.password,
        whatsapp: stepTwo.whatsapp,

        //familyDetails:stepOne.familyDetails,
        // educationDetails:stepOne.educationDetails,
        profilePictures: profilePicturesArray,
        // expectations:stepOne.expectations,
        // providings:stepOne.providings,
        // documentPictures:stepOne.documentPictures,
        // dressCodes:stepOne.dressCodes,
        //brokers:stepOne.brokers,
        aboutMe: stepOne.aboutMe,
        contactDetails: [{ mobile }, { email }],
        socialMediaDetails: [{ whatsapp }],
        isWeddingFixed: false,
        profileActivation: false,
      };
      console.log({ save_data });
      dispatch(saveProfile(save_data));

      setLoading(false);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    dispatch(clearAll());
  };

  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(name, value, value.length);
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });

  //   if (name === "nic" && (value.length === 9 || value.length === 12)) {
  //     const { dateOfBirth, gender } = extractGenderAndDOB(value);

  //     console.log({ dateOfBirth, gender });
  //     if (dateOfBirth !== "") {
  //       const _dob = new Date(dateOfBirth); //.toString();

  //       try {
  //         _dob.toISOString();

  //         console.log("dob ", _dob);
  //         setDOB(_dob);
  //         setValues({
  //           ...values,
  //           [name]: value,
  //           gender: gender,
  //           dob: _dob.toISOString(),
  //         });
  //       } catch (err) {
  //         console.log("dob error");
  //       }
  //     }
  //   }
  // };

  function generateAboutMe(stepOne){

      const aboutMe = `My name is ${stepOne.fullName}. I currently live at ${stepOne.address}, in the city of ${stepOne.city}, ${stepOne.province} province, within ${stepOne.country}. I was born in ${stepOne.bornPlace} and my date of birth is ${moment(stepOne.dob).format("DD/MM/yyyy")}.
I identify as ${stepOne.gender} and hold a ${stepOne.marriageStatus} status. I stand at a height of ${stepOne.height} and weigh ${stepOne.weight}. My complexion is ${stepOne.complexion} with ${stepOne.eyeColor} eyes and ${stepOne.hairColor} hair.
My occupation in ${stepOne.occupationCountry} involves ${stepOne.occupation}.
    
NIC: ${stepOne.nic}
District: ${stepOne.district}
Town/Area: ${stepOne.townArea}
    `;

    return aboutMe;
  }


  const onChange = (e) => {
    const { name, value } = e.target;
    let updatedValues = { ...values };
    
    if (name === "nic") {

      if((value.length === 9 || value.length === 12)){

        const { dateOfBirth, gender } = extractGenderAndDOB(value);
        console.log("date of bith ", dateOfBirth);
        if (dateOfBirth !== "") {
          const parsedDOB = dayjs(dateOfBirth, "DD-MM-YYYY");
          console.log("parsedDOB ", parsedDOB);
          if (parsedDOB.isValid()) {
            setDOB(parsedDOB.toDate());
            updatedValues = {
              ...values,
              [name]: value,
              ["gender"]: gender,
              ["dob"]: parsedDOB.toISOString(),
            };
          } else {
            console.error("Invalid date of birth");
          }
        }

      }else{
        updatedValues = {
          ...values,
          [name]: value,
          ["gender"]: "",
          ["dob"]: currentDate.toISOString(),
        };
      }
     
    } else {
      if(name ==="aboutMe"){
        updatedValues = {
          ...values,
          [name]: value,
          
        };
      }else{
        updatedValues = {
          ...values,
          [name]: value,
          ["aboutMe"]:generateAboutMe(updatedValues)
        };
      }
     
    }
  
    setValues(updatedValues);
  };
  

  const onClose = () => {
    handleReset();
    dispatch(removeError());
    props.modelClosed();
  };

  if (isSaved) {
    return (
      <AlertBox
        handleBack={onClose}
        message="Successfully registered for Find Soulmate Matrimonial App! You can now use our mobile app using the provided credentials. The login details have been sent to your email address."
      />
    );
  }

  if (registerError) {
    return <AlertBox message={errorMsg} type="Error" handleBack={handleBack} />;
  }

  

  return (
    <Box>
      <Stepper
        activeStep={activeStep}
        orientation={isSmallScreen ? "vertical" : "horizontal"}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {
            style: {
              backgroundImage:
                "linear-gradient(136deg, rgb(242, 113, 33) 0%, rgb(233, 64, 87) 50%, rgb(138, 35, 135) 100%)",
              boxShadow: "0 4px 10px 0 rgba(0, 0, 0, .25)",
              borderRadius: 20,
              padding: 20,
              minHeight: 50,
              minWidth: 150,
              color: "white",
            },
          };

          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          let icon = <VerifiedUser />;
          if (index === 1) {
            icon = <PermContactCalendar />;
          } else if (index === 2) {
            icon = <FeaturedPlayList />;
          } else {
            icon = <PersonAdd />;
          }

          let stepsIcon = [
            "Personal Details",
            "Profile Details",
            "Educational Details",
          ];
          return (
            <Step key={label} {...stepProps}>
              <StepLabel icon={icon} {...labelProps}>
                <Typography
                  color={"white"}
                  component={"span"}
                  variant={isSmallScreen ? "body2" : "body1"}
                >
                  {label}
                </Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length && !isSaved ? (
        <React.Fragment>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
              padding: 120,
            }}
          >
            <img
              src="https://icon-library.com/images/progress-icon-gif/progress-icon-gif-9.jpg"
              width={60}
            />
            <p>please wait...</p>
          </div>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <VerificationDetails />
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

          {activeStep === 0 && (
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    label="Full Name"
                    name={"fullName"}
                    value={values.fullName}
                    onChange={onChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    label="Address"
                    name="address"
                    value={values.address}
                    onChange={onChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  <DropBox
                    onChange={onChange}
                    name="country"
                    value={values.country}
                    labelText={"Country"}
                    items={[{ text: "Sri Lanka", value: "Sri Lanka" }]}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  <DropBox
                    labelText={"Province"}
                    onChange={onChange}
                    name="province"
                    value={values.province}
                    items={provinces}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  <DropBox
                    labelText={"District"}
                    onChange={onChange}
                    name="district"
                    value={values.district}
                    items={districts}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  <DropBox
                    labelText={"Town/City"}
                    onChange={onChange}
                    name="townArea"
                    value={values.townArea}
                    items={cityLists}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <TextField
                    label="Born Place"
                    onChange={onChange}
                    name="bornPlace"
                    value={values.bornPlace}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  <TextField
                    label="NIC"
                    onChange={onChange}
                    name="nic"
                    
                    value={values.nic}
                    fullWidth
                    required
                    type="number"
                    inputProps={{
                      minLength: 9,
                      inputMode: "numeric", // Trigger numeric keyboard on mobile devices
                      pattern: "[0-9]*", // Ensure only numeric input is allowed
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  <DropBox
                    readOnly={true}
                    labelText={"Gender"}
                    onChange={onChange}
                    name="gender"
                    value={values.gender}
                    items={[
                      { text: "Male", value: "Male" },
                      { text: "Female", value: "Female" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      readOnly
                      format="DD/MM/YYYY"
                      label="Date of birth"
                      value={dayjs(values.dob)}
                      onChange={(d) => setDOB(d.toISOString())}
                      //onBlur={handleBlur}
                      maxDate={maxDate}
                      
      name="dob"
      sx={{
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: values.dob !== prevDOB ? "green" : "", // Change border color to green when value changes
        },
      }}
                      // error={Boolean(touched.dob) && Boolean(errors.dob)}
                      // helperText={touched.dob && errors.dob}
                    
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <TextField
                    label="Occupation"
                    onChange={onChange}
                    name="occupation"
                    value={values.occupation}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  <DropBox
                    labelText="Occupation Country"
                    onChange={onChange}
                    name="occupationCountry"
                    value={values.occupationCountry}
                    items={countryList}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <DropBoxWithColor
                    labelText="Skin Complexion"
                    onChange={onChange}
                    name="complexion"
                    value={values.complexion}
                    items={[
                      { text: "Fair", value: "fair", color: "#fdf4e6" },
                      { text: "Medium", value: "medium", color: "#f7debf" },
                      { text: "Warm", value: "warm", color: "#f6c293" },
                      { text: "Tan", value: "tan", color: "#d69157" },
                      { text: "Dark", value: "dark", color: "#d69157" },
                      { text: "Black", value: "black", color: "#000" },
                    ]}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <DropBoxWithColor
                    labelText="Hair Colour"
                    onChange={onChange}
                    name="hairColor"
                    value={values.hairColor}
                    items={[
                      { text: "White", value: "white", color: "#fff" },
                      { text: "Red", value: "red", color: "#FF0000" },
                      { text: "Blonde", value: "blonde", color: "#faf0be" },
                      { text: "Brown", value: "brown", color: "#964B00" },
                      { text: "Black", value: "black", color: "#000" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  <DropBoxWithColor
                    labelText="Eye Colour"
                    onChange={onChange}
                    name="eyeColor"
                    value={values.eyeColor}
                    items={[
                      { text: "Amber", value: "amber", color: "#FFBF00" },
                      { text: "Black", value: "black", color: "#000" },
                      { text: "Blue", value: "blue", color: "#0000FF" },
                      { text: "Brown", value: "brown", color: "#964B00" },
                      { text: "Green", value: "green", color: "#008000" },
                      { text: "Gray", value: "gray", color: "#808080" },
                      { text: "Hazel", value: "hazel", color: "#8A6E3C" },
                      { text: "Violet", value: "violet", color: "#8F00FF" },
                    ]}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <TextField
                    label="Height in (cm)"
                    onChange={onChange}
                    onFocus={(e) => e.target.select()}
                    name="height"
                    type="number"
                    value={values.height}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  <TextField
                    label="Weight in (kg)"
                    onChange={onChange}
                    onFocus={(e) => e.target.select()}
                    name="weight"
                    type="number"
                    value={values.weight}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  <DropBox
                    labelText={"Marriage Status"}
                    onChange={onChange}
                    name="marriageStatus"
                    value={values.marriageStatus}
                    items={[
                      { text: " Un-Married", value: "un-married" },
                      { text: "	Married", value: "married" },
                      { text: "	Divorced", value: "divorce" },
                      { text: "	Widower (male)", value: "widower" },
                      { text: "	Widow (female)", value: "widow" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="About Me"
                    onChange={onChange}
                    name="aboutMe"
                    value={values.aboutMe}
                    multiline
                    minRows={3}
                    maxRows={6}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
          )}

          {activeStep === 1 && <PasswordPolicyForm />}

          {activeStep === 2 && <Summary />}

          <div style={{ Height: 20 }}>
            <br />
          </div>
          <div
            style={{
              bottom: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "white",
              paddingBottom: 50,
              margin: "10px",
              right: 60,
            }}
          >
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              color="primary"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)" }}
            >
              Back
            </Button>

            {/* {isStepOptional(activeStep) && (
    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
      Skip
    </Button>
  )} */}
            <Button
              variant="contained"
              color="error"
              disabled={loading}
              onClick={handleNext}
            >
              {activeStep === steps.length - 1
                ? loading
                  ? "Submitting..."
                  : "Finish"
                : "Next"}
            </Button>
          </div>
        </React.Fragment>
      )}
    </Box>
  );
}
