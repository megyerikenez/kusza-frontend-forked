import {configureStore} from '@reduxjs/toolkit'
import {authSlice} from './modules/auth/core/authSlice'
import {itemSlice} from './pages/administrator/CreateNewBid/itemSlice'
import {administratorSlice} from './pages/administrator/administratorSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    item: itemSlice.reducer,
    administrator: administratorSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
