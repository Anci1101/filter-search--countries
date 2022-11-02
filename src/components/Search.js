import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {

  const [inputValue, setInputValue] = useState('')
  const handleSearch = () => {
    console.log( inputValue, 'input value');
  }

  return (
    <div className='search-bar'>
      <button onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /></button>
      <input type="text" onChange={(e)=>setInputValue(e.target.value)} placeholder='Search for a country...'/>
    </div>
  )
}

export default Search
