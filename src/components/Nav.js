import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const Nav = () => {

  const {toggleTheme} = useContext(ThemeContext)
  return (
    <div className='nav'>
      <div><p className='nav-question'>Where in the world?</p></div>
      <div className='nav-mode'><FontAwesomeIcon icon={faMoon}/><p onClick={toggleTheme}>Dark mode</p></div>
    </div>
  )
}

export default Nav