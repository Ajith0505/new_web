import { combineReducers, createSlice } from "@reduxjs/toolkit";

import { userLogin } from "../../api/useraction";

import { fetchAdcategory } from "../../api/useraction";

import { fetchProfileDetail } from "../../api/useraction";

import { resetPasswordAction } from "../../api/useraction";

// initialize userToken from local storage

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
  isloggedin: false,
  adCategory: [],
  isIconClicked: false,
  isDrawerOPen: false,
  isEditDrawerOPen: false,
  userProfile: [],
  editProfiles:null,
  isPwdDrawerOpen:false,
  isResetPwdDone:null,

}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
      state.success = true
      state.isloggedin = true
    },
    [userLogin.rejected]: (state, { payload }) => {
      console.log("user payload error", payload);
      state.loading = false
      state.error = payload

    },

  },
})

const fetchAdCategorySlice = createSlice({
  name: 'fetchAd',
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [fetchAdcategory.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [fetchAdcategory.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.adCategory = payload
    },
    [fetchAdcategory.rejected]: (state, { payload }) => {

      state.loading = false
      state.error = payload

    },

  },
})

const profileSlice = createSlice({

  name: 'userprofile',
  initialState,

  reducers: {

    handleProfileModal: (state, action) => {
      state.isIconClicked = action.payload
    },
    handleProfilesideDrawer: (state, action) => {
      state.isDrawerOPen = action.payload

      state.isIconClicked = false

    },

    handleEditsideDrawer: (state, action) => {
      state.isEditDrawerOPen = action.payload
      state.isDrawerOPen = false
      state.isIconClicked = false
    },
    handleResetPwdsideDrawer: (state, action) => {
      state.isPwdDrawerOpen = action.payload 
      state.isDrawerOPen = false
      state.isIconClicked = false
    },

  },
})

const profileApiSlice = createSlice({
  name: 'profileapi',
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [fetchProfileDetail.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [fetchProfileDetail.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userProfile = payload.data.profile
    
    },
    [fetchProfileDetail.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    
    },
    

  },
})

const editProfileSlice = createSlice({
  name: 'editprofile',
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [fetchProfileDetail.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [fetchProfileDetail.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.editProfiles = payload
    
    },
    [fetchProfileDetail.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    
    },
    

  },
})


const resetPasswordSlice = createSlice({
  name: 'resetpassword',
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [resetPasswordAction.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [resetPasswordAction.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.isResetPwdDone = payload 
    },
    [resetPasswordAction.rejected]: (state, { payload }) => {
      console.log("user payload error", payload);
      state.loading = false
      state.error = payload

    },

  },
})








const reducerWhole = combineReducers({
  login: userSlice.reducer,
  adcategory: fetchAdCategorySlice.reducer,
  userprofile: profileSlice.reducer,
  profileapi: profileApiSlice.reducer,
  editprofile: editProfileSlice.reducer,
  resetpassword: resetPasswordSlice.reducer,
})

export default reducerWhole;


export const { handleProfileModal, handleProfilesideDrawer, handleEditsideDrawer, handleResetPwdsideDrawer } = profileSlice.actions

// export ;