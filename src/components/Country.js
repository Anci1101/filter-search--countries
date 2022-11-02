import React from 'react'

const Country = ({countryname, population,region, capital, flag }) => {

  return (
    <>
    <div className='country'>
      <div className='country-flag'>
        <img src={flag} alt={flag} /></div>
      <div className='country-details'>
        <h4>{countryname}</h4>
        <p>Population: <span>{population}</span></p>
        <p>Region: <span>{region}</span></p>
        <p>Capital: <span>{capital}</span></p>
      </div>
    </div>
    </>
    
  )
}

export default Country