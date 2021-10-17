import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const initialState = {
  loading: false,
  hasErrors: false,
  items: [],
}

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    getReview: state => {
      state.loading = true
    },
    getReviewSuccess: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.hasErrors = false
    },
    getReviewFailure: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.hasErrors = true
    },
  }
})
export const { getReview, getReviewSuccess, getReviewFailure } = reviewSlice.actions;

export const reviewSelector = state => state.review

export default reviewSlice.reducer;

export function review(value) {
  debugger
  return async dispatch => {
    dispatch(getReview())
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
      const response = await axios.post(`https://askus-servic-main-aegoakmtmi7q.herokuapp.com/reviewAnswer`, value,{
        headers: headers
      })
      let data = await response.data
      data = { ...data, status: response.status }
      dispatch(getReviewSuccess(data))
    } catch (error) {
      if (error.response) {
        let data = (error.response.data);
        data = { ...data, status: error.response.status }
        dispatch(getReviewFailure(data))
      }
    }
  }
}
