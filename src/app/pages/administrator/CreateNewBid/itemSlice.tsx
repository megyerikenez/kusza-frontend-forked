import {createSlice} from '@reduxjs/toolkit'

const emptyState = {
  itemNumber: '',
  quantity: 0,
  unit: 0,
  description: '',
  currency: 0,
  netUnitPrice: 0,
}

export const itemSlice = createSlice({
  name: 'item',
  initialState: emptyState,
  reducers: {
    addItem: (state, action) => {
      state = action.payload
    },
  },
})

export const {addItem} = itemSlice.actions

export default itemSlice.reducer
