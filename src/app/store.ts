import {configureStore} from '@reduxjs/toolkit'
import {authSlice} from './modules/auth/state/authSlice'
import {itemSlice} from './pages/administrator/CreateNewBid/itemSlice'
import {administratorSlice} from './pages/administrator/state/administratorSlice'
import {editSlice} from './pages/administrator/CreateNewBid/editSlice'
import {supervisorSlice} from './pages/supervisor/state/supervisorSlice'
import {reasonSlice} from './pages/administrator/CreateNewBid/reasonSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    item: itemSlice.reducer,
    administrator: administratorSlice.reducer,
    edit: editSlice.reducer,
    supervisor: supervisorSlice.reducer,
    reason: reasonSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
