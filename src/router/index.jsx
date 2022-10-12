import { RouterProvider } from 'react-router-dom'
import { getRoutesFromLogin } from './getRoutesFromLogin'

export const AppRouter = ({ user, setUser }) => {
  const appRoutes = getRoutesFromLogin({ user, setUser })
  return <RouterProvider router={appRoutes} />
}
