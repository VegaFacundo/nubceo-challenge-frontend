import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import { links } from '../../router/links'
import { getBandAlbumsDataAPI, getBandDataAPI } from '../../utils/axiosREST'

import MembersAlbumsDisplay from '../../components/membersAlbumsDiplay'

const Band = () => {
  const [band, setBand] = useState(() => {})
  const [albums, setAlbums] = useState(() => [])
  const { bandId } = useParams()
  const navigate = useNavigate()

  const getBandData = async () => {
    try {
      const bandData = await getBandDataAPI({ bandId: bandId })
      if (!bandData?.data) {
        navigate(links.lobby)
      }
      setBand(bandData.data)
    } catch (e) {
      navigate(links.lobby)
    }
  }

  const getBandAlbumsData = async () => {
    try {
      const bandAlbumsData = await getBandAlbumsDataAPI({ bandId: bandId })
      if (!bandAlbumsData?.data) {
        return setAlbums([])
      }
      setAlbums(bandAlbumsData.data)
    } catch (e) {
      setAlbums([])
    }
  }

  useEffect(() => {
    getBandData()
    getBandAlbumsData()
  }, [])
  return (
    <Grid
      container
      justifyContent="space-around"
      flexDirection="column"
      height="100%"
      wrap="nowrap"
    >
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={2}
      >
        {!band && 'Loading'}
        <Typography variant="h3">{band?.name}</Typography>
      </Grid>
      {band?.members && (
        <Grid item xs={12} display="flex" justifyContent="center" p={2}>
          <MembersAlbumsDisplay arrayData={band.members} type="members" />
        </Grid>
      )}
      {albums?.length > 0 && (
        <Grid item xs={12} display="flex" justifyContent="center" p={2}>
          <MembersAlbumsDisplay arrayData={albums} type="albums" />
        </Grid>
      )}
      {band?.members && albums?.length === 0 && (
        <Grid item xs={12} display="flex" justifyContent="center" p={2}>
          <Typography>No albums to display</Typography>
        </Grid>
      )}
    </Grid>
  )
}

export default Band
