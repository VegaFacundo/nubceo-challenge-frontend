import styled from '@emotion/styled'
import { Grid } from '@mui/material'

export const LoginContainer = styled(Grid)({
  width: '100%',
  height: '100%',
  background: 'linear-gradient(131deg, #0a5642, #0a2356, #850d0d)',
  backgroundSize: '600% 600%',
  WebkitAnimation: 'AnimationName 9s ease infinite',
  MozAnimation: 'AnimationName 9s ease infinite',
  animation: 'AnimationName 9s ease infinite',
  '@-webkit-keyframes AnimationName': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  '@-moz-keyframes AnimationName': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  '@keyframes AnimationName': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
})
