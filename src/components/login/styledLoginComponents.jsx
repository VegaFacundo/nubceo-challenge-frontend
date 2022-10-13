import styled from '@emotion/styled'
import { Grid } from '@mui/material'

export const LoginContainer = styled(Grid)(({ theme }) => ({
  width: '100%',
  height: '100%',
  background: `linear-gradient(131deg,${theme.palette.green.bgDark}, ${theme.palette.blue.bgDark}, ${theme.palette.red.bgDark})`,
  backgroundSize: '600% 600%',
  WebkitAnimation: 'AnimationName 9s ease infinite',
  MozAnimation: 'AnimationName 9s ease infinite',
  animation: 'AnimationName 9s ease infinite',
  '@-webkit-keyframes AnimationName': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' }
  },
  '@-moz-keyframes AnimationName': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' }
  },
  '@keyframes AnimationName': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' }
  }
}))
