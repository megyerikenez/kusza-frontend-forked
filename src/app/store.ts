import {configureStore} from '@reduxjs/toolkit'
import {authSlice} from './modules/auth/core/authSlice'
import {itemSlice} from './pages/administrator/CreateNewBid/itemSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    item: itemSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
