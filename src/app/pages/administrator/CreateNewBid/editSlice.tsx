import {createSlice} from '@reduxjs/toolkit'
import {IOrderItems} from './interfaces'

const emptyState = {
  isEditing: false,
  data: {
    deliveryNumber: '',
    description: '',
    supplierRequester: '',
    purchaserOrderNumber: '',
    contractorName: '',
    contractorDelegate: '',
    contractorSeat: '',
    contractorTaxNumber: '',
    contractorPhoneNumber: '',
    contractorEmail: '',
    contractorContact: '',
    confirmOrganizationUnit: '',
    paymentMethod: '',
    deliveryDate: '',
    invoiceAddress: '',
    year: '',
    faculty: '',
    confirmationNumber: '',
    category: '',
    offerDescription: '',
    supervisor: '',
    orderConfirmationItems: Array<IOrderItems>(),
  },
}

export const editSlice = createSlice({
  name: 'edit',
  initialState: emptyState,
  reducers: {
    setIsEditing: (state, action) => {
      state.isEditing = action.payload
    },
    setData: (state, action) => {
      state.data.deliveryNumber = action.payload.deliveryNumber
      state.data.description = action.payload.description
      state.data.supplierRequester = action.payload.supplierRequester
      state.data.purchaserOrderNumber = action.payload.purchaserOrderNumber
      state.data.contractorName = action.payload.contractorName
      state.data.contractorDelegate = action.payload.contractorDelegate
      state.data.contractorSeat = action.payload.contractorSeat
      state.data.contractorTaxNumber = action.payload.contractorTaxNumber
      state.data.contractorPhoneNumber = action.payload.contractorPhoneNumber
      state.data.contractorEmail = action.payload.contractorEmail
      state.data.contractorContact = action.payload.contractorContact
      state.data.confirmOrganizationUnit = action.payload.confirmOrganizationUnit
      state.data.paymentMethod = action.payload.paymentMethod
      state.data.deliveryDate = action.payload.deliveryDate
      state.data.invoiceAddress = action.payload.invoiceAddress
      state.data.year = action.payload.year
      state.data.faculty = action.payload.faculty
      state.data.confirmationNumber = action.payload.confirmationNumber
      state.data.category = action.payload.category
      state.data.offerDescription = action.payload.offerDescription
      state.data.supervisor = action.payload.supervisor
    },
  },
})

export const {setIsEditing, setData} = editSlice.actions

export default editSlice.reducer
