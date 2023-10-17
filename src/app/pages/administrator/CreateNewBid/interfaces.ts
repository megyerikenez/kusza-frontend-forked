interface IContractor {
  name: string
  delegate: string
  seat: string
  taxNumber: string
  phoneNumber: string
  email: string
}

export interface IOrderItems {
  itemNumber: string
  quantity: number
  unit: number
  description: string
  currency: number
  netUnitPrice: number
}

export interface INewBid {
  id: number
  deliveryNumber: string
  description: string
  supplierRequester: string
  purchaserOrderNumber: string
  contractor: IContractor
  contractorContact: string
  confirmOrganizationUnit: string
  paymentMethod: number
  deliveryDate: string
  invoiceAddress: string
  year: number
  faculty: string
  confirmationNumber: string
  category: string
  offerDescription: string
  supervisor: string
  orderConfirmationItems: IOrderItems[]
}
