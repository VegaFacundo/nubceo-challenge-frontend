import { Grid, Typography } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import AlbumIcon from '@mui/icons-material/Album'

const MembersAlbumsDisplay = ({ arrayData = [], type = 'members' }) => {
  const dataToRender = {
    albums: { icon: <AlbumIcon fontSize="large" /> },
    members: { icon: <StarIcon fontSize="large" /> },
  }
  return (
    <Grid container justifyContent="space-around" alignItems="center">
      {arrayData?.map((item, index) => (
        <Grid
          key={index}
          item
          display="flex"
          alignContent="center"
          alignItems="center"
          flexDirection="column"
        >
          {dataToRender[type].icon}
          <Typography variant="h5">{item.name}</Typography>
        </Grid>
      ))}
    </Grid>
  )
}

export default MembersAlbumsDisplay
