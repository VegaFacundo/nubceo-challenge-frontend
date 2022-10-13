import { storageKeys } from './constKeys'

export const setLocalUser = (userData) => {
  const userToSave = JSON.stringify(userData)
  window.localStorage.setItem(storageKeys.user, userToSave)
}

export const getLocalUser = () => {
  const userData = JSON.parse(window.localStorage.getItem(storageKeys.user))
  return userData ?? null
}

export const deleteLocalUser = () => {
  window.localStorage.removeItem(storageKeys.user)
}
