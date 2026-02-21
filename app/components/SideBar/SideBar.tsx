'use client'
import React from 'react'
import { Button, Drawer } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';


const SideBar = () => {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box>
      <List>
        {['Dashboard', 'Contact'].map((text) => (
          <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon >
              <CatchingPokemonIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Menu</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

    </div>

  )
}

export default SideBar