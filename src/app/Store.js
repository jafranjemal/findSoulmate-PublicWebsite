import { configureStore } from "@reduxjs/toolkit";
import ProfileSlice from "../features/profile/Profile.slice";
 

 export const store = configureStore({
    reducer:{
        profile: ProfileSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
 })

 