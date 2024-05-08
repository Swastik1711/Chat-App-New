import { Avatar, Badge } from '@mui/material'
import React from 'react'

const Chat = () => {
  return (
    <div className='chatContainer'>
      <Avatar/>
      <div className="chatContainer__info">
        <div className="chatContainer__info__header">
          <h2>John Doe</h2>
          <span>4m</span>
        </div>
        <div className="chatContainer__info__message_info">
          <p>this is the last message from Jane carter</p>
          <Badge badgeContent={1} sx={{marginRight:"11px", marginTop:"10px", "& .MuiBadge-badge": {color: "lightgreen",backgroundColor: "#ff7a55"}}}/>
        </div>
      </div>
    </div>
  )
}

export default Chat