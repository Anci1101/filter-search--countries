import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const FilterInput = () => {

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
          <button>Africa</button>
          <button>America</button>
          <button>Asia</button>
          <button>Europe</button>
          <button>Oceania</button>
      </div>)}
    </div>
  )
}

export default FilterInput