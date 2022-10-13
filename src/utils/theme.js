import { createTheme } from '@mui/material/styles'

export const themeToUse = ({ mode = 'dark' }) => {
  const theme = createTheme({
    palette: {
      mode,
      green: {
        bgDark: '#0a5642'
      },
      blue: {
        bgDark: '#0a2356'
      },
      red: {
        bgDark: '#850d0d'
      }
    }
  })
  return theme
}
