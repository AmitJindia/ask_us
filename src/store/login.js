import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const initialState = {
  loading: false,
  hasErrors: false,
  items: [],
}

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getLogin: state => {
      state.loading = true
    },
    getLoginSuccess: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.hasErrors = false
    },
    getLoginFailure: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.hasErrors = true
    },
  }
})
export const { getLogin, getLoginSuccess, getLoginFailure } = loginSlice.actions;

export const loginSelector = state => state.login

export default loginSlice.reducer;

export function login(value) {
  return async dispatch => {
    dispatch(getLogin())
    try {
      const response = await axios.post(`https://askus-servic-main-aegoakmtmi7q.herokuapp.com/signin`, value)
      let data = await response.data
      data={...data,status:response.status}
      dispatch(getLoginSuccess(data))
    } catch (error) {
      if (error.response) {
        let data = (error.response.data);
        data={...data,status:error.response.status}
        dispatch(getLoginFailure(data))
      }
    }
  }
}
