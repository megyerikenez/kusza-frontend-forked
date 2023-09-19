import {createSelector} from '@reduxjs/toolkit'
import {RootState} from '../../../store'

export const isUserAuthenticated = createSelector(
  (state: RootState) => state.auth.userEmail,
  (userEmail) => userEmail !== ''
)
