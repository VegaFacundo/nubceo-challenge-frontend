import { AppBar, Grid } from '@mui/material'
import React from 'react'
import MusicLogo from '../../assets/login/music-1-logo-svg-vector'
import AppBarNabvar from '../appBar'

const Layout = ({ user, setUser, children }) => {
  return (
    <Grid container height="100%" flexDirection="column" wrap="nowrap">
      <Grid item>
        <AppBarNabvar user={user} setUser={setUser} />
      </Grid>
      <Grid item flexGrow={1}>
        {children}
      </Grid>
    </Grid>
  )
}

export default Layout
