import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const GET_BID_BY_USERID_URL = `${API_URL}/orderconfirmation/getbyuserid`
export const POST_NEW_BID_URL = `${API_URL}/orderconfirmation/create`
export const PUT_NEXT_STATUS_URL = `${API_URL}/orderconfirmation/movetonextstatus`

export function getUserBids() {
  return axios.get(GET_BID_BY_USERID_URL)
}

export function postBid(data: any) {
  return axios.post(POST_NEW_BID_URL, {
    deliveryNumber: data['deliveryNumber'],
    description: data['description'],
    SupplierRequester: data['supplierRequester'],
    PurchaserOrderNumber: data['purchaserOrderNumber'],
    Contractor: {
      Name: 'ABC Company',
      Delegate: 'John Smith',
      Seat: data['contractorSeat'],
      TaxNumber: data['contractorTaxNumber'],
      PhoneNumber: data['contractorPhoneNumber'],
      Email: data['contractorEmail'],
    },
    ContractorContact: data['contractorContact'],
    ConfirmOrganizationUnit: data['confirmOrganizationUnit'],
    PaymentMethod: 1,
    DeliveryDate: '2023-10-29',
    InvoiceAddress: data['invoiceAddress'],
    OrderConfirmationItems: data['orderConfirmationItems'],
  })
}

export const nextStatus = (id: number) => {
  return axios.put(`${PUT_NEXT_STATUS_URL}/${id}`)
}
