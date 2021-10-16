import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const initialState = {
  loading: false,
  hasErrors: false,
  items: [],
}

const adminApprovalQuerySlice = createSlice({
  name: "adminApprovalQuery",
  initialState,
  reducers: {
    getAdminApprovalQuery: state => {
      state.loading = true
    },
    getAdminApprovalQuerySuccess: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.hasErrors = false
    },
    getAdminApprovalQueryFailure: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.hasErrors = true
    },
  }
})
export const { getAdminApprovalQuery, getAdminApprovalQuerySuccess, getAdminApprovalQueryFailure } = adminApprovalQuerySlice.actions;

export const adminapprovalQuerySelector = state => state.adminApproval

export default adminApprovalQuerySlice.reducer;

export function adminapprovalQuery(value) {
  debugger
  return async dispatch => {
    dispatch(getAdminApprovalQuery())
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
      const response = await axios.post(`http://localhost:3002/approveAnswer`, value,{
        headers: headers
      })
      let data = await response.data
      data = { ...data, status: response.status }
      dispatch(getAdminApprovalQuerySuccess(data))
    } catch (error) {
      if (error.response) {
        let data = (error.response.data);
        data = { ...data, status: error.response.status }
        dispatch(getAdminApprovalQueryFailure(data))
      }
    }
  }
}
