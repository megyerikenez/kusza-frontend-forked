import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const GET_BID_BY_USERID_URL = `${API_URL}/orderconfirmation/getbyuserid`

export function getUserBids() {
  return axios.get(GET_BID_BY_USERID_URL)
}
