import React, { useState } from 'react'
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { IconButton } from '@mui/material';

const ChatFooter = () => {
    const [message, setMessage] = useState("");
    const sendMessage = () => { };
  return (
      <div className='chat_footer'>
          <div className="chat_footer__inputbox">
              <IconButton>
              <AttachFileOutlinedIcon  sx={{rotate:"45deg", color:"#575792"}}/>
              </IconButton>
                <form>
                    <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder='Type a message'
                        type='text'
                    />
                    <IconButton
                        onClick={sendMessage}
                        type='submit'
                    >
                        <SendOutlinedIcon sx={{rotate:"-45deg", color:"#575792"}}/>
                    </IconButton>
                </form>
          </div>
      </div>
  )
}

export default ChatFooter