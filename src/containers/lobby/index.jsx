import React, { useState, useEffect } from 'react'
import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import { getAllBandsAPI } from '../../utils/axiosREST'
import NorthIcon from '@mui/icons-material/North'
import { links } from '../../router/links'
import { Link, useNavigate } from 'react-router-dom'
import { ConstructionOutlined } from '@mui/icons-material'

const Lobby = () => {
  const [bandsData, setBandsData] = useState({
    bandsToRender: [],
    notInListBands: [],
  })
  const [sortAS, setSortAs] = useState(() => true)
  const navigate = useNavigate()

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
      bandsToRender.sort(sortBandsName)
      setSortAs(true)
      setBandsData({ bandsToRender, notInListBands: [] })
    } catch (e) {}
  }

  useEffect(() => {
    getAllBands()
  }, [])

  const sortByNameBands = () => {
    setBandsData((state) => {
      state.bandsToRender.sort(sortBandsName)
      return { ...state }
    })
    setSortAs((state) => !state)
  }

  const handleChangeSearch = (e) => {
    const { value } = e.target
    setBandsData((state) => {
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
    })
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
  return (
    <Grid container spacing={3} p={2}>
      <Grid item xs={12}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <TextField onChange={handleChangeSearch} size="small" />
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
            background: 'linear-gradient(45deg, #0a5642, #0a2356, #850d0d)',
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              onClick={sortByNameBands}
            >
              <Typography>
                All bands:
                <NorthIcon
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
                        <Box onClick={() => goToBand({ bandID: band.id })}>
                          {band.name}
                        </Box>
                      }
                    />
                    {band.members && band.collapse ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )}
                  </ListItemButton>
                  {band.members && (
                    <Collapse in={band.collapse} unmountOnExit>
                      <List component="div" disablePadding>
                        <Grid container flexDirection="column" spacing={2}>
                          {band.members.map((member, index) => {
                            return (
                              <Grid item key={index}>
                                <ListItemButton sx={{ pl: 4 }} key={index}>
                                  <ListItemIcon>
                                    <Grid
                                      item
                                      display="flex"
                                      alignItems="center"
                                    >
                                      <StarBorder />
                                      <ListItemText primary={member.name} />
                                    </Grid>
                                  </ListItemIcon>
                                </ListItemButton>
                              </Grid>
                            )
                          })}
                        </Grid>
                      </List>
                    </Collapse>
                  )}
                </Box>
              )
            })}
        </List>
      </Grid>
    </Grid>
  )
}

export default Lobby
