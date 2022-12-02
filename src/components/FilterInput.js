import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const FilterInput = ({handleFilterRegion}) => {

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  const [open, setOpen] = useState(false)
  
  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div>
    <div className='filter-input'>
      <p>Filter by Region</p>
      <button className='filter-btn' onClick={handleOpen}>
        <FontAwesomeIcon icon={faChevronDown}/>
      </button>
    </div>
    {open && (
      <div className='filter-input-menu'>
          {regions.map((region)=>(
            <button onClick={(e)=>handleFilterRegion(e)} name={region} key={region}>{region}</button>
          ))}
      </div>)}
    </div>
  )
}

export default FilterInput