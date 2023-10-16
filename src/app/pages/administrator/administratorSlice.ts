import {createSlice} from '@reduxjs/toolkit'
import {INewBid} from './CreateNewBid/interfaces'

export interface IAdministratorState {
  bids: INewBid[]
}

const emptyState: IAdministratorState = {
  bids: [],
}

export const administratorSlice = createSlice({
  name: 'item',
  initialState: emptyState,
  reducers: {
    setBids: (state, action) => {
      state.bids = action.payload
    },
  },
})

export const {setBids} = administratorSlice.actions

export default administratorSlice.reducer
