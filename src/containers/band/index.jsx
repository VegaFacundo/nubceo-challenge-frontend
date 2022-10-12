import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import { links } from '../../router/links'
import { getBandAlbumsDataAPI, getBandDataAPI } from '../../utils/axiosREST'

const Band = () => {
  const [band, setBand] = useState(() => {})
  const [albums, setAlbums] = useState(() => {})
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
        setAlbums({})
      }
      setAlbums(bandAlbumsData.data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getBandData()
    getBandAlbumsData()
  }, [])
  return <Grid container>test</Grid>
}

export default Band
