import React from 'react'
import SidebarFirst from '../../components/sidebar_first/SidebarFirst'
import SidebarSecond from '../../components/sidebar_second/SidebarSecond'
import Chatbox from '../../components/chatbox/Chatbox'


const Home = () => {
  return (
      <div className='app__body'>
        <SidebarFirst />
        <div className="chat__body">
            <SidebarSecond />
            <Chatbox />
        </div>
      </div>
  )
}

export default Home