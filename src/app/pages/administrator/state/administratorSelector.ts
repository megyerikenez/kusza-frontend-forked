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

export const selectPaymentMethods = createSelector(
  (state: RootState) => state.administrator.paymentMethods,
  (paymentMethods) => paymentMethods
)

export const isBidInStateSelector = createSelector(
  [selectBids],
  (bids) => (bidId: string) => bids.some((bid) => bid.id.toString() === bidId)
)
