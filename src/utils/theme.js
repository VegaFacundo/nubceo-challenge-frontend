import { createTheme } from '@mui/material/styles'

export const themeToUse = ({ mode = 'dark' }) => {
  const theme = createTheme({
    palette: {
      mode
    }
  })
  return theme
}
