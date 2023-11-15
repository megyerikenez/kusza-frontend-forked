import {GET_ALL_BIDS, PUT_NEXT_STATUS_URL} from '../administrator/requests'
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL
const PUT_DECLINE_BID_URL = `${API_URL}/orderconfirmation/decline`

export const getAllBids = () => {
  return axios.get(GET_ALL_BIDS)
}

export const nextStatus = (id: number) => {
  return axios.put(`${PUT_NEXT_STATUS_URL}/${id}`)
}

export const declineBid = (id: number, reason: string) => {
  return axios.put(`${PUT_DECLINE_BID_URL}/${id}`, {
    reason: reason,
  })
}
