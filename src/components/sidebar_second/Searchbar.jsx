import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
  return (
      <div className="sidebar_second__searchbarContainer">
        <SearchIcon />
        <input placeholder='search...' type='text'/>
      </div>
  )
}

export default Searchbar