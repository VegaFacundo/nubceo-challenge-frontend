import { StarBorder } from '@mui/icons-material'
import {
  Collapse,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import React from 'react'

const MembersCollapse = ({ band }) => {
  return (
    <Collapse in={band.collapse} unmountOnExit>
      <List component="div" disablePadding>
        <Grid container flexDirection="column" spacing={2}>
          {band.members.map((member, index) => {
            return (
              <Grid item key={index}>
                <ListItemButton sx={{ pl: 4 }} key={index}>
                  <ListItemIcon>
                    <Grid item display="flex" alignItems="center">
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
  )
}

export default MembersCollapse
