import { createStore } from "redux";
import rootReducer from "./reducers"; // You'll need to create this reducer file

const store = createStore(rootReducer); // Create the Redux store

export default store;
