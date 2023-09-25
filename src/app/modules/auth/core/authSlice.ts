import {createSlice} from '@reduxjs/toolkit'
import {setupAxiosAuthToken} from './_requests'

const emptyState = {
  userName: '',
  userRoles: [],
  userID: '',
  userEmail: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: emptyState,
  reducers: {
    setUserData: (state, action) => {
      state.userName = action.payload.userName
      state.userRoles = action.payload.userRoles
      state.userEmail = action.payload.userEmail
      state.userID = action.payload.userID
    },
    logoutUser: (state) => {
      state = emptyState
      setupAxiosAuthToken(null, '')
    },
  },
})

export const {setUserData, logoutUser} = authSlice.actions

export default authSlice.reducer
