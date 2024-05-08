import React from 'react';
import Searchbar from './Searchbar';
import Chat from './Chat';

const SidebarSecond = () => {
  return (
      <div className='sidebar_second'>
        <div className='sidebar_second__searchbar'>
          <Searchbar/>
      </div>
      <div className="sidebar_second__chats">
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        </div>
      </div>
  )
}

export default SidebarSecond