import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const GET_ALL_BIDS = `${API_URL}/orderconfirmation/getall`
export const PUT_NEXT_STATUS_URL = `${API_URL}/orderconfirmation/nextstatus`

export const getAllBids = () => {
  return axios.get(GET_ALL_BIDS)
}

export const nextStatus = (id: number) => {
  return axios.put(`${PUT_NEXT_STATUS_URL}/${id}`)
}
