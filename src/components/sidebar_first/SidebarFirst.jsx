import React from 'react'
import { Avatar, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const SidebarFirst = () => {
  return (
      <div className='sidebar_first'>
          <div className='sidebar_first__top'>
              <Avatar sx={{cursor: 'pointer'}}/>
          </div>
          <div className="sidebar_first__bottom">
              <IconButton aria-label="setting" size="medium">
                <SettingsIcon fontSize="small" sx={{color:"lightgrey"}} />
              </IconButton>
              <IconButton aria-label="logout" size="medium">
                <LogoutIcon fontSize="small" sx={{color:"lightgrey",transform: 'rotate(180deg)'}} />
              </IconButton>
          </div>
      </div>
  )
}

export default SidebarFirst