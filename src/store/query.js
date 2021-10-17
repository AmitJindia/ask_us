import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const initialState = {
  loading: false,
  hasErrors: false,
  items: [],
}

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    getQuery: state => {
      state.loading = true
    },
    getQuerySuccess: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.hasErrors = false
    },
    getQueryFailure: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.hasErrors = true
    },
  }
})
export const { getQuery, getQuerySuccess, getQueryFailure } = querySlice.actions;

export const querySelector = state => state.query

export default querySlice.reducer;

export function query(value) {
  return async dispatch => {
    dispatch(getQuery())
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
      const response = await axios.post(`https://askus-servic-main-aegoakmtmi7q.herokuapp.com/postQuery`, value,{
        headers: headers
      })
      let data = await response.data
      data = { ...data, status: response.status }
      dispatch(getQuerySuccess(data))
    } catch (error) {
      if (error.response) {
        let data = (error.response.data);
        data = { ...data, status: error.response.status }
        dispatch(getQueryFailure(data))
      }
    }
  }
}
