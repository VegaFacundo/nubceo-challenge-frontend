import { storageKeys } from './constKeys'

export const setLocalUser = (userData) => {
  const userToSave = JSON.stringify(userData)
  localStorage.setItem(storageKeys.user, userToSave)
}

export const getLocalUser = () => {
  const userData = JSON.parse(localStorage.getItem(storageKeys.user))
  return userData ?? { token: false }
}

export const deleteLocalUser = () => {
  localStorage.removeItem(storageKeys.user)
}
