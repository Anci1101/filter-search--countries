import React, { useContext } from 'react'
import Country from "./Country";
import { CountryContext } from './CountryContext';


const CountryList = () => {
  const {countries} = useContext(CountryContext)
  console.log(countries, 'data');

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