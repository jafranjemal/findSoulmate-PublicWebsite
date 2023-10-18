//Ducks pattern
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../API";

const initialState = {
  stepOne: {
    fullName: "",
    address: "",
    country: "Sri Lanka",
    province: "",
    district: "",
    city: "",
    townArea: "",
    bornPlace: "",
    gender: "Male",
    dob: new Date(),
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
    occupationCountry: "Sri Lanka",
    whatsapp: 0,
    aboutMe: "",
  },
  stepTwo: {
    mobile: 0,
    email: "",
    whatsapp: 0,
    password: "",
    confirmPassword:"",
    isTermsChecked:false,
    profilePicture: null,
  },
  profilePicture: null,
  isSaved: false,
  registerError:false,
  errorMsg:""
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    addStepOne(state, { payload }) {
      state.stepOne = payload;
    },
    addProfilePic(state, { payload }) {
      state.profilePicture = payload;
    },
    removeProfilePic(state, { payload }) {
      state.profilePicture = null;
    },
    addError(state, { payload }) {
      state.registerError = true;
      state.errorMsg = payload;

    },
    removeError(state, { payload }) {
      state.errorMsg = "";
      state.registerError = false;
      state.isSaved = false;

    },
    addStepTwo(state, { payload }) {
      state.stepTwo = payload;
    },
    clearAll(state, { payload }) {
      state.stepOne = initialState.stepOne;
      state.stepTwo = initialState.stepTwo;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(saveProfile.fulfilled, (state, action) => {
      // Add user to the state array
      state.isSaved = true;
    });

    builder.addCase(saveProfile.rejected, (state, action) => {
      // Add user to the state array
      state.isSaved = false;
      state.registerError = true;
 
      let msg = action?.payload?.error;
      if(!msg)
        msg = action?.error.message +", Please check your internet connection";
      console.log({msg})
      state.errorMsg = msg //"Profile not saved, Something went wrong"
    });
  },
});

export const saveProfile = createAsyncThunk(
    "profileSlice/saveProfile",
    async (data, thunkAPI) => {
      try {
        const response = await API.post(
          "profiles/v2",
          data
        );
        return response.data;
      } catch (error) {
        // Handle server errors here
        if (error.response) {
          // Server responded with a status code outside the range of 2xx
          const { status, data } = error.response;
          console.log("error===> ", error.response)
          return thunkAPI.rejectWithValue(data);
        } else {
          // Other errors (e.g., network error)
          throw error;
        }
      }
    }
  );

export const {
  addStepOne,
  addStepTwo,
  clearAll,
  addProfilePic,
  removeProfilePic,
  removeError
} = profileSlice.actions;

export default profileSlice.reducer;
