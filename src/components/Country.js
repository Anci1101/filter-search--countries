import React from 'react'
import { Link } from 'react-router-dom'

const Country = ({countryname, population,region, capital, flag, id }) => {

  return (
      <>
      <div className='country' >
        <Link to={`/CountryDetails/${id}`}>
            <div className='country-flag'>
              <img src={flag} alt={flag} /></div>
            <div className='country-details'>
              <h4>{countryname}</h4>
              <p>Population: <span>{population}</span></p>
              <p>Region: <span>{region}</span></p>
              <p>Capital: <span>{capital}</span></p>
            </div>
        </Link>
      </div>
    </>
    
  )
}

export default Country