import React from 'react'
import Header from './Header'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'

const Chatbox = () => {
  return (
      <div className='chatbox'>
        <Header />
        <ChatBody />
        <ChatFooter />
      </div>
  )
}

export default Chatbox