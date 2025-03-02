import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import { thunk } from "redux-thunk"; // Import as named export

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
