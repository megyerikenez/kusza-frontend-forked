interface IContractor {
  Name: string
  Delegate: string
  Seat: string
  TaxNumber: string
  PhoneNumber: string
  Email: string
}

interface IOrderItems {
  ItemNumber: string
  Quantity: number
  Unit: number
  Description: string
  Currency: number
  NetUnitPrice: number
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
