import React, { useState } from 'react'
import {
  TextField,
  Typography,
  Button,
  Grid,
  CircularProgress,
} from '@mui/material'
import { LoginContainer } from './styledLoginComponents'
import { fakeLogin } from '../../utils/fakeLogin'
import { redirect } from 'react-router-dom'
import { links } from '../../router/links'

const Login = ({ setUser }) => {
  const [email, setEmail] = useState(() => '')
  const [password, setPassword] = useState(() => '')
  const [disabledContinue, setDisabledContinue] = useState(() => false)
  const onSubmitLogin = async () => {
    setDisabledContinue(true)
    const user = {
      email,
      password,
    }
    try {
      const loginResponse = await fakeLogin(user)
      if (loginResponse.token) {
        setUser(loginResponse)
        redirect(links.lobby)
      }
    } catch (e) {
      setDisabledContinue(false)
    }
  }
  const setStates = {
    email: (email) => setEmail(email),
    password: (password) => setPassword(password),
  }

  const handleChangeInputs = (e) => {
    const { name, value } = e.target
    setStates[name]?.(value)
  }

  return (
    <LoginContainer
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      margin="auto 0"
    >
      <Grid item>
        <TextField
          id="input-email"
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleChangeInputs}
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          id="input-password"
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handleChangeInputs}
          fullWidth
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          disabled={disabledContinue}
          loadingPosition="start"
          fullWidth
          onClick={onSubmitLogin}
          sx={{ backgroundColor: 'white' }}
        >
          {disabledContinue && (
            <CircularProgress size={24} color="secondary" pr={2} />
          )}
          <Typography px={2}>Continue</Typography>
        </Button>
      </Grid>
    </LoginContainer>
  )
}

export default Login
