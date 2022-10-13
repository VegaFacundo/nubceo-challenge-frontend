import React, { useState, useEffect } from 'react'
import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  useTheme
} from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { getAllBandsAPI } from '../../utils/axiosREST'
import NorthIcon from '@mui/icons-material/North'
import { links } from '../../router/links'
import { useNavigate } from 'react-router-dom'
import MembersCollapse from '../../components/lobby/collapse'
import MusicVideoIcon from '@mui/icons-material/MusicVideo'

const Lobby = () => {
  const [bandsData, setBandsData] = useState({
    bandsToRender: [],
    notInListBands: []
  })
  const [sortAS, setSortAs] = useState(true)
  const navigate = useNavigate()
  const theme = useTheme()

  const sortBandsName = (a, b) => {
    const sortAscOrDesc = sortAS ? 1 : -1
    if (a.name > b.name) {
      return 1 * sortAscOrDesc
    }
    if (a.name < b.name) {
      return -1 * sortAscOrDesc
    }
    return 0
  }

  const getAllBands = async () => {
    try {
      const allBandsResponse = await getAllBandsAPI()
      const bandsToRender = allBandsResponse.data.map((band) => {
        return { ...band, collapse: false }
      })
      setSortAs(true)
      bandsToRender.sort(sortBandsName)
      setBandsData({ bandsToRender, notInListBands: [] })
    } catch (e) {}
  }

  const sortByNameBands = () => {
    setBandsData((state) => {
      state.bandsToRender.sort(sortBandsName)
      return { ...state }
    })
  }

  const handleChangeSearch = (e) => {
    const { value } = e.target
    setBandsData((state) => searchIsIncludedInList({ state, value }))
  }

  const searchIsIncludedInList = ({ state, value }) => {
    state.bandsToRender = [...state.bandsToRender, ...state.notInListBands]
    state.notInListBands = []
    const bandsToRender = state.bandsToRender.filter((band) =>
      band.name.toLowerCase().includes(value.toLowerCase())
    )
    bandsToRender.sort(sortBandsName)
    const notInListBands = state.bandsToRender.filter(
      (band) => !band.name.toLowerCase().includes(value.toLowerCase())
    )
    state.bandsToRender = bandsToRender
    state.notInListBands = notInListBands
    return { ...state }
  }

  const handleChangeCollapse = (index) => {
    setBandsData((state) => {
      state.bandsToRender[index].collapse = !state.bandsToRender[index].collapse
      return { ...state }
    })
  }

  const goToBand = ({ bandID }) => {
    navigate(`.${links.band}/${bandID}`)
  }

  useEffect(() => {
    getAllBands()
  }, [])

  useEffect(() => {
    sortByNameBands()
  }, [sortAS])

  return (
    <Grid container spacing={3} p={2}>
      <Grid item xs={12}>
        <Grid container spacing={2} alignItems='center'>
          <Grid item>
            <TextField onChange={handleChangeSearch} size='small' />
          </Grid>
          <Grid item>
            <Button onClick={getAllBands} sx={{ color: 'white' }}>
              Reload bands
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <List
          sx={{
            width: '100%',
            background: `linear-gradient(45deg, ${theme.palette.green.bgDark}, ${theme.palette.blue.bgDark}, ${theme.palette.red.bgDark})`
          }}
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
              <Typography>
                All bands:
                <NorthIcon
                  onClick={() => setSortAs((state) => !state)}
                  sx={{ transform: `rotate(${sortAS ? 0 : 180}deg)` }}
                />
              </Typography>
            </ListSubheader>
          }
        >
          {bandsData.bandsToRender.length > 0 &&
            bandsData.bandsToRender.map((band, index) => {
              return (
                <Box key={index}>
                  <ListItemButton
                    onClick={() => {
                      handleChangeCollapse(index)
                    }}
                  >
                    <ListItemText
                      primary={
                        <Box display='flex' alignItems='center'>
                          <Typography
                            onClick={() => goToBand({ bandID: band.id })}
                            pr={1}
                          >
                            {band.name}
                          </Typography>
                          <MusicVideoIcon
                            fontSize='small'
                            onClick={() => goToBand({ bandID: band.id })}
                          />
                        </Box>
                      }
                    />
                    {band.members && band.collapse
                      ? (
                        <ExpandLess />
                        )
                      : (
                        <ExpandMore />
                        )}
                  </ListItemButton>
                  {band.members && <MembersCollapse band={band} />}
                </Box>
              )
            })}

          {!(bandsData.bandsToRender.length > 0) && (
            <Grid container justifyContent='center'>
              <Grid item p={4}>
                <CircularProgress size={24} color='inherit' pr={2} />
              </Grid>
            </Grid>
          )}
        </List>
      </Grid>
    </Grid>
  )
}

export default Lobby
