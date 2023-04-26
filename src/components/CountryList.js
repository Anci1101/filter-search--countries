import React from 'react'
import Country from "./Country";


const CountryList = ({countries}) => {

  return (
    <div className='country-wrapper grid'>
      {countries && countries.map((country)=>(
        <Country 
          countryname={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag={country.flags.png}
          key={country.name.official}
          id={country.name.official}/>
      ))}
      
    </div>
  )
}

export default CountryList