import axios from 'axios'
import {AuthModel, UserModel} from './_models'

const API_URL = process.env.REACT_APP_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/kusza-auth/getuserinfo`
export const LOGIN_URL = `${API_URL}/kusza-auth/login`
export const GET_BID_BY_USERID_URL = `${API_URL}/orderconfirmation/getbyuserid`
export const REQUEST_PASSWORD_URL = `${API_URL}/auth/forgot_password`

export function login(email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    UserName: email,
    Password: password,
  })
}

export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserDataByToken() {
  return axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL)
}

export function setupAxiosAuthToken(axios: any, token: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

export function getUserBids() {
  return axios.get(GET_BID_BY_USERID_URL)
}
