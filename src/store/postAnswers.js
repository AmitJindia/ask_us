import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const initialState = {
  loading: false,
  hasErrors: false,
  items: [],
}

const postAnswerSlice = createSlice({
  name: "postAnswer",
  initialState,
  reducers: {
    getPostAnswer: state => {
      state.loading = true
    },
    getPostAnswerSuccess: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.hasErrors = false
    },
    getPostAnswerFailure: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.hasErrors = true
    },
  }
})
export const { getPostAnswer, getPostAnswerSuccess, getPostAnswerFailure } = postAnswerSlice.actions;

export const postAnswerSelector = state => state.postAnswer

export default postAnswerSlice.reducer;

export function postAnswer(value) {
  return async dispatch => {
    dispatch(getPostAnswer())
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
      const response = await axios.post(`http://localhost:3002/postAnswer`, value,{
        headers: headers
      })
      let data = await response.data
      data = { ...data, status: response.status }
      dispatch(getPostAnswerSuccess(data))
    } catch (error) {
      if (error.response) {
        let data = (error.response.data);
        data = { ...data, status: error.response.status }
        dispatch(getPostAnswerFailure(data))
      }
    }
  }
}
