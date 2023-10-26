import * as Yup from 'yup'
import {IOrderItems} from './interfaces'

export const generateFieldKey = (fieldName: string) => `field_${fieldName}`

export const initialValues = {
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
  orderConfirmationItems: [
    {
      itemNumber: '',
      quantity: 0,
      unit: 0,
      description: '',
      currency: 0,
      netUnitPrice: 0,
    },
  ],
}

export const addItem = (item: IOrderItems) => {
  initialValues.orderConfirmationItems.push(item)
}

export const REQUIRED_MESSAGE = 'Kötelező mező'
export const MAX_LENGTH = 50
export const MAX_LENGTH_MESSAGE = 'Maximum 50 karakter'

export const newBidSchema = Yup.object().shape({
  deliveryNumber: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  description: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  supplierRequester: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  purchaserOrderNumber: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  contractorName: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  contractorDelegate: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  contractorSeat: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  contractorTaxNumber: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  contractorPhoneNumber: Yup.string()
    .max(MAX_LENGTH, MAX_LENGTH_MESSAGE)
    .required(REQUIRED_MESSAGE),
  contractorEmail: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  contractorContact: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  confirmOrganizationUnit: Yup.string()
    .max(MAX_LENGTH, MAX_LENGTH_MESSAGE)
    .required(REQUIRED_MESSAGE),
  paymentMethod: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  deliveryDate: Yup.date().required(REQUIRED_MESSAGE),
  invoiceAddress: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  year: Yup.number().required(REQUIRED_MESSAGE),
  faculty: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  confirmationNumber: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  category: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  offerDescription: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  supervisor: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  orderConfirmationItems: Yup.array().of(
    Yup.object().shape({
      itemNumber: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
      quantity: Yup.number().required(REQUIRED_MESSAGE),
      unit: Yup.number().required(REQUIRED_MESSAGE),
      description: Yup.string().max(MAX_LENGTH, MAX_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
      currency: Yup.number().required(REQUIRED_MESSAGE),
      netUnitPrice: Yup.number().required(REQUIRED_MESSAGE),
    })
  ),
})
