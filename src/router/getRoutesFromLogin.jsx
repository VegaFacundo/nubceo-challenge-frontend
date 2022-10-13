import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '../containers/login'
import Lobby from '../containers/lobby'
import Band from '../containers/band'
import { links } from './links'
import { BAND_ID } from '../utils/const'

export const getRoutesFromLogin = ({ anyDefaultProps, user, setUser }) => {
  const routesToUse = user ? 'login' : 'notLogin'

  const routesToRender = {
    notLogin: [
      {
        path: links.login,
        element: <Login {...anyDefaultProps} setUser={setUser} />,
      },
      {
        path: '*',
        element: <Navigate to={links.login} />,
      },
    ],
    login: [
      {
        path: links.lobby,
        element: <Lobby />,
      },
      {
        path: `${links.lobby}${links.band}/:${BAND_ID}`,
        element: <Band />,
      },
      {
        path: '*',
        element: <Navigate to={links.lobby} />,
      },
    ],
  }

  const router = createBrowserRouter(routesToRender[routesToUse])

  return router
}
