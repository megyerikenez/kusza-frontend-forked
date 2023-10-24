import {createSelector} from '@reduxjs/toolkit'
import {RootState} from '../../../store'

export const selectBids = createSelector(
  (state: RootState) => state.administrator.bids,
  (bids) => bids
)

export const selectSupervisors = createSelector(
  (state: RootState) => state.administrator.supervisors,
  (supervisors) => supervisors
)
