import {createSelector} from '@reduxjs/toolkit'
import {RootState} from '../../../store'

export const selectSupervisorBids = createSelector(
  (state: RootState) => state.supervisor.bids,
  (bids) => bids
)
