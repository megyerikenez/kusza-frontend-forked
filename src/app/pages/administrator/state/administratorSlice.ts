import {createSlice} from '@reduxjs/toolkit'
import {INewBid, ISupervisor} from '../CreateNewBid/interfaces'

export interface IAdministratorState {
  bids: INewBid[]
  supervisors: ISupervisor[]
}

const emptyState: IAdministratorState = {
  bids: [],
  supervisors: [],
}

export const administratorSlice = createSlice({
  name: 'item',
  initialState: emptyState,
  reducers: {
    setBids: (state, action) => {
      state.bids = action.payload
    },
    setSupervisors: (state, action) => {
      state.supervisors = action.payload
    },
  },
})

export const {setBids} = administratorSlice.actions

export default administratorSlice.reducer
