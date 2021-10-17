import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const initialState = {
  loading: false,
  hasErrors: false,
  items: [],
}

const acceptQuerySlice = createSlice({
  name: "acceptQuery",
  initialState,
  reducers: {
    getAcceptQuery: state => {
      state.loading = true
    },
    getAcceptQuerySuccess: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.hasErrors = false
    },
    getAcceptQueryFailure: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.hasErrors = true
    },
  }
})
export const { getAcceptQuery, getAcceptQuerySuccess, getAcceptQueryFailure } = acceptQuerySlice.actions;

export const acceptQuerySelector = state => state.acceptQuery

export default acceptQuerySlice.reducer;

export function acceptQuery(value) {
  return async dispatch => {
    dispatch(getAcceptQuery())
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
      const response = await axios.post(`https://askus-servic-main-aegoakmtmi7q.herokuapp.com/acceptQuestion`, value,{
        headers: headers
      })
      let data = await response.data
      data = { ...data, status: response.status }
      dispatch(getAcceptQuerySuccess(data))
    } catch (error) {
      if (error.response) {
        let data = (error.response.data);
        data = { ...data, status: error.response.status }
        dispatch(getAcceptQueryFailure(data))
      }
    }
  }
}
