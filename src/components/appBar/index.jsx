import { AppBar, Button, Grid, Typography } from '@mui/material'
import MusicLogo from '../../assets/login/music-1-logo-svg-vector'
import { deleteLocalUser } from '../../utils/localStorageManagment'

const AppBarNabvar = ({ user, setUser }) => {
  const isUserToRender = !!user
  const logout = () => {
    deleteLocalUser()
    setUser(null)
  }

  return (
    <AppBar position='static'>
      <Grid container px={2} alignItems='center' justifyContent='space-between'>
        <Grid item maxWidth='100px'>
          <MusicLogo sx={{ fontSize: '130px' }} />
        </Grid>
        <Grid item>
          <Typography variant={{ xs: 'body', md: 'h5' }}>
            Welcome {user?.name ?? 'back'}
          </Typography>
        </Grid>
        {isUserToRender && (
          <Grid item maxWidth='100px'>
            <Button variant='outlined' sx={{ color: 'white' }} onClick={logout}>
              Logout
            </Button>
          </Grid>
        )}
      </Grid>
    </AppBar>
  )
}

export default AppBarNabvar
