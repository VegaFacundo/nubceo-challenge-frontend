import React, { useState } from 'react'
import { TextField, Typography, Grid, CircularProgress } from '@mui/material'
import { LoginContainer } from '../../components/login/styledLoginComponents'
import { fakeLogin } from '../../utils/fakeLogin'
import { redirect } from 'react-router-dom'
import { links } from '../../router/links'
import { Button } from '../../components/button/button'

const Login = ({ setUser }) => {
  const [email, setEmail] = useState(() => '')
  const [password, setPassword] = useState(() => '')
  const [disabledContinue, setDisabledContinue] = useState(() => false)
  const onSubmitLogin = async () => {
    setDisabledContinue(true)
    const user = {
      email,
      password
    }
    try {
      const loginResponse = await fakeLogin(user)
      if (loginResponse.token) {
        setUser(loginResponse)
        redirect(links.lobby)
        return
      }
    } catch (e) {
      setDisabledContinue(false)
    }
  }
  const setStates = {
    email: (email) => setEmail(email),
    password: (password) => setPassword(password)
  }

  const handleChangeInputs = (e) => {
    const { name, value } = e.target
    setStates[name]?.(value)
  }

  return (
    <LoginContainer
      container
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      margin='auto 0'
    >
      <Grid item>
        <TextField
          id='input-email'
          label='Email'
          name='email'
          type='email'
          value={email}
          onChange={handleChangeInputs}
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          id='input-password'
          label='Password'
          name='password'
          type='password'
          value={password}
          onChange={handleChangeInputs}
          fullWidth
        />
      </Grid>
      <Grid item>
        <Button
          variant='contained'
          disabled={disabledContinue}
          loadingposition='start'
          fullWidth
          onClick={onSubmitLogin}
        >
          {disabledContinue && (
            <CircularProgress size={24} color='inherit' pr={2} />
          )}
          <Typography px={2} color='black'>
            Continue
          </Typography>
        </Button>
      </Grid>
    </LoginContainer>
  )
}

export default Login
