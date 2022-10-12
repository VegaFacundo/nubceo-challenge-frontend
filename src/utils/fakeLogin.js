import { setLocalUser } from './localStorageManagment'

export const fakeLogin = async ({ email = 'test', password = 'test' }) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      const user = {
        name: 'test user',
        email,
        password,
        token: 'test token'
      }
      setLocalUser(user)
      return resolve(user)
    }, 1500)
  )
}
