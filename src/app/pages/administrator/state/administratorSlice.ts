import {createSlice} from '@reduxjs/toolkit'
import {INewBid, ISupervisor} from '../CreateNewBid/interfaces'

export interface IAdministratorState {
  bids: INewBid[]
  supervisors: ISupervisor[]
  paymentMethods: string[]
  currencies: string[]
}

const emptyState: IAdministratorState = {
  bids: [],
  supervisors: [],
  paymentMethods: [],
  currencies: [],
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
    addBidToState: (state, action) => {
      state.bids.push(action.payload)
    },
    updateBidInState: (state, action) => {
      const index = state.bids.findIndex((bid) => bid.id === action.payload.id)
      console.log(state.bids)
      state.bids[index] = {...state.bids[index], ...action.payload}
    },
    setCurrencies: (state, action) => {
      state.currencies = action.payload
    },
  },
})

export const {
  setBids,
  setSupervisors,
  setPaymentMethods,
  deleteBidFromState,
  addBidToState,
  updateBidInState,
  setCurrencies,
} = administratorSlice.actions

export default administratorSlice.reducer
