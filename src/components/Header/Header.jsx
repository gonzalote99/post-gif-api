import './Header.css';
import NightlightRoundIcon from '@mui/icons-material/NightlightRoundIcon';
import LightModeIcon from '@mui/icons-material/LightMode';
import React from 'react';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Header = () => {
  return (
  <Box sx={{flexGrow: 1}} >
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{flexGrown: 1}}>
         codemancers chats
        </Typography>
      </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;