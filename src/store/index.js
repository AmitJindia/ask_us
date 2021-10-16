import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./login";
import registerSlice from "./register";
import querySlice from "./query";
import acceptQuerySlice from './acceptQuery';
import postAnswerSlice from './postAnswers';
import reviewReducer from './reviewQA';
import adminApprovalReducer from './adminQAApproval';

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerSlice,
    query: querySlice,
    acceptQuery: acceptQuerySlice,
    postAnswer: postAnswerSlice,
    review: reviewReducer,
    adminApproval:adminApprovalReducer
  },
})

export default store;

