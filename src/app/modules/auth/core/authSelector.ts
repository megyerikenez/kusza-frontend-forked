import {createSelector} from '@reduxjs/toolkit'
import {RootState} from '../../../store'

export const isUserAuthenticated = createSelector(
  (state: RootState) => state.auth.userEmail,
  (userEmail) => userEmail !== ''
)

export const userSelector = createSelector(
  (state: RootState) => state.auth,
  (auth) => auth
)

export const userRolesSelector = createSelector(
  (state: RootState) => state.auth.userRoles,
  (userRoles) => userRoles
)
