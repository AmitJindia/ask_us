import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const initialState = {
  loading: false,
  hasErrors: false,
  items: [],
}

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    getRegister: state => {
      state.loading = true
    },
    getRegisterSuccess: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.hasErrors = false
    },
    getRegisterFailure: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.hasErrors = true
    },
  }
})
export const { getRegister, getRegisterSuccess, getRegisterFailure } = registerSlice.actions;

export const registerSelector = state => state.register

export default registerSlice.reducer;

export function register(value) {
  return async dispatch => {
    dispatch(getRegister())
    try {
      const response = await axios.post(`https://askus-servic-main-aegoakmtmi7q.herokuapp.com/signup`, value)
      let data = await response.data
      data = { ...data, status: response.status }
      dispatch(getRegisterSuccess(data))
    } catch (error) {
      if (error.response) {
        let data = (error.response.data);
        data = { ...data, status: error.response.status }
        dispatch(getRegisterFailure(data))
      }
    }
  }
}
