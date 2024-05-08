import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Header = () => {
  return (
      <div className="chatbox__header">
        <Avatar/>
        <div className="chatbox__headerInfo">
            <h3>Johg Doe</h3>
            <p>Last seen...</p>
          </div>
          <div className="chatbox__headerIcons">
            <IconButton>
              <SearchIcon/>
            </IconButton>
            <IconButton>
              <MoreVertIcon/>
            </IconButton>
          </div>
        </div>
  )
}

export default Header