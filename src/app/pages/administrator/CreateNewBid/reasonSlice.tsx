import {createSlice} from '@reduxjs/toolkit'

const emptyState = {
  bidId: 0,
  reason: '',
}

export const reasonSlice = createSlice({
  name: 'reason',
  initialState: emptyState,
  reducers: {
    setReasonBidId: (state, action) => {
      state.bidId = action.payload
    },
    setReason: (state, action) => {
      state.reason = action.payload
    },
  },
})

export const {setReasonBidId, setReason} = reasonSlice.actions
