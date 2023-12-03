import { createSlice } from '@reduxjs/toolkit';
export const guardrail = createSlice({
  name: 'guardrail',
  initialState: {
    userDetails: {
      loading: true,
      data: {},
    },
    tempDetails: {
      data: {
        First_Name: '',
        Last_Name: '',
        Email_Address: '',
        Password: '',
        Munchkin_Id: '',
      },
    },
    confirmModalData: {},
    commentData: {},
  },
  reducers: {
    authDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    tempAuthDetails: (state, action) => {
      state.tempDetails = action.payload;
    },
  },
});

export const { authDetails, tempAuthDetails } = guardrail.actions;
export default guardrail.reducer;
