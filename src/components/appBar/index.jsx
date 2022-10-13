import { AppBar, Button, Grid } from '@mui/material'
import MusicLogo from '../../assets/login/music-1-logo-svg-vector'
import { deleteLocalUser } from '../../utils/localStorageManagment'

const AppBarNabvar = ({ user, setUser }) => {
  const isUserToRender = user ? true : false
  const logout = () => {
    deleteLocalUser()
    setUser(null)
  }

  return (
    <Grid item xs={12}>
      <AppBar position="static">
        <Grid
          container
          px={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <MusicLogo sx={{ fontSize: '130px' }} />
          </Grid>
          <Grid item>Welcome {user?.name ?? 'back'}</Grid>
          {isUserToRender && (
            <Grid item>
              <Button
                variant="outlined"
                sx={{ color: 'white' }}
                onClick={logout}
              >
                Logout
              </Button>
            </Grid>
          )}
        </Grid>
      </AppBar>
    </Grid>
  )
}

export default AppBarNabvar
