import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tab,
} from '@mui/material';


import MenuIcon from '@mui/icons-material/Menu';

export default function DrawerComp() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const arryList = ['Home', 'Sign In', 'Register'];

  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        className="custom-drawer"
      >
        <Tab
          label="Home"
          href="/"
          sx={{
            padding: '0px 70px',
            color: '#00B4FF',
            '&:hover': {
              color: '#00B4FF',
              fontSize: '22px',
              transform: 'scale(1.1)',
              transition: 'transform 0.2s ease',
            },
          }}
        ></Tab>
        <Tab
          label="Sign In"
          href="/login"
          sx={{
            '&:hover': {
              color: '#00B4FF',
              fontSize: '22px',
              transform: 'scale(1.1)',
              transition: 'transform 0.2s ease',
            },
          }}
        ></Tab>
        <Tab
          label="Register"
          href="/register"
          sx={{
            '&:hover': {
              color: '#00B4FF',
              fontSize: '22px',
              transform: 'scale(1.1)',
              transition: 'transform 0.2s ease',
            },
          }}
        ></Tab>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ marginLeft: 'auto', color: 'white' }}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
    </React.Fragment>
  );
}
