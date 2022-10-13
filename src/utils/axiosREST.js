import { createAxiosInstance } from './axios'
import { ALBUMS_URL, BAND_URL, BAND_ID } from './const'
const axios = createAxiosInstance()

export const getAllBandsAPI = async () => {
  try {
    const allBandsResponse = await axios.get(BAND_URL)
    return allBandsResponse
  } catch (e) {
    return e
  }
}

export const getBandDataAPI = async ({ bandId }) => {
  try {
    const BandResponse = await axios.get(`${BAND_URL}/${bandId}`)
    return BandResponse
  } catch (e) {
    return e
  }
}

export const getBandAlbumsDataAPI = async ({ bandId }) => {
  try {
    const BandAlbumsResponse = await axios.get(
      `${ALBUMS_URL}?${BAND_ID}=${bandId}`
    )
    return BandAlbumsResponse
  } catch (e) {
    return e
  }
}
