import {createSlice} from '@reduxjs/toolkit'

const emptyState = {
  userName: '',
  userRole: '',
  userEmail: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: emptyState,
  reducers: {
    setUserData: (state, action) => {
      state.userName = action.payload.userName
      state.userRole = action.payload.userRole
      state.userEmail = action.payload.userEmail
    },
    logoutUser: (state) => {
      state = emptyState
    },
  },
})

export const {setUserData, logoutUser} = authSlice.actions

export default authSlice.reducer
