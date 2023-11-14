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
  },
})

export const {setAllBids} = supervisorSlice.actions
