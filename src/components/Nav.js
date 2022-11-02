import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Nav = () => {
  return (
    <div className='nav'>
      <div><p className='nav-question'>Where in the world?</p></div>
      <div className='nav-mode'><FontAwesomeIcon icon={faMoon}/><p>Dark mode</p></div>
    </div>
  )
}

export default Nav