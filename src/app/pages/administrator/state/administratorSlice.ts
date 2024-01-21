import {createSlice} from '@reduxjs/toolkit'
import {INewBid, ISupervisor} from '../CreateNewBid/interfaces'

export interface IAdministratorState {
  bids: INewBid[]
  supervisors: ISupervisor[]
  paymentMethods: string[]
}

const emptyState: IAdministratorState = {
  bids: [],
  supervisors: [],
  paymentMethods: [],
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
    setPaymentMethods: (state, action) => {
      state.paymentMethods = action.payload
    },
    deleteBidFromState: (state, action) => {
      state.bids = state.bids.filter((bid) => bid.id !== action.payload)
    },
  },
})

export const {setBids, setSupervisors, setPaymentMethods, deleteBidFromState} =
  administratorSlice.actions

export default administratorSlice.reducer
