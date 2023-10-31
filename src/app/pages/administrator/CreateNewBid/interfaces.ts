interface IContractor {
  name: string
  delegate: string
  seat: string
  taxNumber: string
  phoneNumber: string
  email: string
}

interface IBidHistory {
  userId: number
  fromStatus: string
  toStatus: string
  date: string
  reason: string
  id: number
  deleted: boolean
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
  faculty: string
  supervisor: string
  orderConfirmationItems: IOrderItems[]
  statusHistory: IBidHistory[]
  status: string
}

export interface ISupervisor {
  id: number
  userName: string
  organizationUnit: string
  roles: string[]
}
