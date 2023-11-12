import {RootState} from '../../../store'

export const selectIsEditing = (state: RootState) => state.edit.isEditing

export const selectData = (state: RootState) => state.edit.data
