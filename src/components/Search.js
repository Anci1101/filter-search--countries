import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = ({handleSearch}) => {

  return (
    <div className='search-bar'>
      <button onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /></button>
      <input type="text" onChange={handleSearch} placeholder='Search for a country...'/>
    </div>
  )
}

export default Search
