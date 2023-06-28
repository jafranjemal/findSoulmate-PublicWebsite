const initialState = {
  fullName: "",
  address: "",
  country: "",
  province: "",
  district: "",
  town: "",
  townArea: "",
  bornPlace: "",
  nic: "",
  gender: "",
  age: "",
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PERSONAL_DETAILS":
      return {
        ...state,
        fullName: action.payload.fullName,
        address: action.payload.address,
        country: action.payload.country,
        province: action.payload.province,
        district: action.payload.district,
        town: action.payload.town,
        townArea: action.payload.townArea,
        bornPlace: action.payload.bornPlace,
        nic: action.payload.nic,
        gender: action.payload.gender,
        age: action.payload.age,
      };
    default:
      return state;
  }
};

export default registrationReducer;
