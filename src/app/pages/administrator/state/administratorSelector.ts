import {createSelector} from '@reduxjs/toolkit'
import {RootState} from '../../../store'

export const selectBids = createSelector(
  (state: RootState) => state.administrator.bids,
  (bids) => bids
)
