import {createSlice} from '@reduxjs/toolkit'
import {INewBid} from '../../administrator/CreateNewBid/interfaces'

interface ISupervisorState {
  bids: INewBid[]
}

const emptyState: ISupervisorState = {
  bids: [],
}

export const supervisorSlice = createSlice({
  name: 'supervisor',
  initialState: emptyState,
  reducers: {
    setAllBids: (state, action) => {
      state.bids = action.payload
    },
    updateBidInState: (state, action) => {
      const index = state.bids.findIndex((bid) => bid.id === action.payload.id)
      console.log(state.bids)
      state.bids[index] = {...state.bids[index], ...action.payload}
    },
  },
})

export const {setAllBids, updateBidInState} = supervisorSlice.actions
