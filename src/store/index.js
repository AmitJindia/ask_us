import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./login";
import registerSlice from "./register";

const store = configureStore({
  reducer: {login:loginReducer,register:registerSlice},
})

export default store;

