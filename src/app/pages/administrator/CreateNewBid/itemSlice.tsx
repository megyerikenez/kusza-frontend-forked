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
      state.itemNumber = action.payload.itemNumber
      state.quantity = action.payload.quantity
      state.unit = action.payload.unit
      state.description = action.payload.description
      state.currency = action.payload.currency
      state.netUnitPrice = action.payload.netUnitPrice
    },
  },
})

export const {addItem} = itemSlice.actions

export default itemSlice.reducer
