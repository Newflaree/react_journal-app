import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // 'not-authentecated', 'authentecated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },
  reducers: {
    login: ( state, action ) => {

    },
    logout: ( state, payload ) => {

    },
    chechingCredentials: ( state ) => {

    },
  }
});


export const { login, logout, chechingCredentials } = authSlice.actions;
