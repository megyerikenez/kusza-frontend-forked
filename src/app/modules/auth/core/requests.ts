import axios from 'axios'
import {AuthModel, UserModel} from './_models'

const API_URL = process.env.REACT_APP_API_URL

export const LOGIN_URL = `${API_URL}/kusza-auth/login`
export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/kusza-auth/getuserinfo`

export function login(email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    UserName: email,
    Password: password,
  })
}

export function getUserDataByToken() {
  return axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL)
}

export function setupAxiosAuthToken(axios: any, token: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
