import axios from 'axios'
import { getLocalUser } from './localStorageManagment'
import { BASE_URL_API_MUSIC } from '../utils/const'

export const createAxiosInstance = () => {
  const userLocalData = getLocalUser()
  const instance = axios.create({
    baseURL: BASE_URL_API_MUSIC,
    headers: { Authorization: userLocalData?.token ?? '' }
  })
  return instance
}
