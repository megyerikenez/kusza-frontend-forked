import {RootState} from '../../../store'

export const selectReasonId = (state: RootState) => state.reason.bidId
export const selectReason = (state: RootState) => state.reason.reason
