import {createSlice} from '@reduxjs/toolkit'
import {IOrderItems} from './interfaces'

const emptyState = {
  isEditing: false,
  data: {
    id: 0,
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
      state.data.id = action.payload.id
      state.data.deliveryNumber = action.payload.deliveryNumber
      state.data.description = action.payload.description
      state.data.supplierRequester = action.payload.supplierRequester
      state.data.purchaserOrderNumber = action.payload.purchaserOrderNumber
      state.data.contractorName = action.payload.contractor.name
      state.data.contractorDelegate = action.payload.contractor.delegate
      state.data.contractorSeat = action.payload.contractor.seat
      state.data.contractorTaxNumber = action.payload.contractor.taxNumber
      state.data.contractorPhoneNumber = action.payload.contractor.phoneNumber
      state.data.contractorEmail = action.payload.contractor.email
      state.data.contractorContact = action.payload.contractorContact
      state.data.confirmOrganizationUnit = action.payload.confirmOrganizationUnit
      state.data.paymentMethod = action.payload.paymentMethod
      state.data.deliveryDate = action.payload.deliveryDate
      state.data.invoiceAddress = action.payload.invoiceAddress
      state.data.year = action.payload.year
      state.data.confirmationNumber = action.payload.confirmationNumber
      state.data.category = action.payload.category
      state.data.offerDescription = action.payload.offerDescription
      state.data.supervisor = action.payload.supervisor
    },
  },
})

export const {setIsEditing, setData} = editSlice.actions

export default editSlice.reducer
