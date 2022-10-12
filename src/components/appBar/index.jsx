import { AppBar, Button, Grid } from '@mui/material'
import MusicLogo from '../../assets/login/music-1-logo-svg-vector'
import { deleteLocalUser } from '../../utils/localStorageManagment'

const AppBarNabvar = ({ user, setUser }) => {
  const isUserToRender = !!user.token
  const logout = () => {
    deleteLocalUser()
    setUser({ token: false })
  }

  return (
    <Grid item minWidth="100%">
      <AppBar position="static">
        <Grid container px={2} spacing={2} alignItems="center">
          <Grid item ml={2}>
            <MusicLogo sx={{ fontSize: '130px' }} />
          </Grid>
          <Grid item ml="auto">
            Welcome {user.name ?? 'back'}
          </Grid>
          {isUserToRender && (
            <Grid item ml="auto">
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
