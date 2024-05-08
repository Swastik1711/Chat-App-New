import React from 'react'
import Message from './Message'

const ChatBody = () => {
  return (
        <div className='chat_body_box'>
          <Message isSender={false} message={"This is a message"}/>
          <Message isSender={true} message={"This is a message"}/>
          <Message isSender={false} message={"This is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a message"}/>
          <Message isSender={true} message={"This is a message"}/>
          <Message isSender={true} message={"This is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a message"}/>
          <Message isSender={false} message={"This is a message"}/>
          <Message isSender={true} message={"This is a message"}/>
          <Message isSender={true} message={"This is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a message"}/>
          <Message isSender={false} message={"This is a message"}/>
          <Message isSender={true} message={"This is a message"}/>
          <Message isSender={false} message={"This is a message"}/>
          <Message isSender={true} message={"This is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a messageThis is a message"}/>
          <Message isSender={false} message={"This is a message"}/>
          <Message isSender={true} message={"This is a message"}/>
          <Message isSender={true} message={"This is a message"}/>
          <Message isSender={false}  message={"This is a message"}/>
          <Message isSender={true} message={"This is a message"}/>
          <Message isSender={false} message={"This is a message"}/>
          <Message isSender={true} message={"This is a message"}/>
          <Message isSender={true} message={"This is a message"}/>
          <Message isSender={false} message={"This is a message"}/>
        </div>
  )
}

export default ChatBody