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
  DeliveryNumber: string
  Description: string
  SupplierRequester: string
  PurchaserOrderNumber: string
  Contractor: IContractor
  ContractorContact: string
  ConfirmOrganizationUnit: string
  PaymentMethod: number
  DeliveryDate: string
  InvoiceAddress: string
  Year: number
  Faculty: string
  ConfirmationNumber: string
  Category: string
  OfferDescription: string
  Supervisor: string
  OrderConfirmationItems: IOrderItems[]
}
