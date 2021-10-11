import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./login";
import registerSlice from "./register";
import querySlice from "./query";

const store = configureStore({
  reducer: {login:loginReducer,register:registerSlice,query:querySlice},
})

export default store;

