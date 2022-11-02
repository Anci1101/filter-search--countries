import React from 'react'
import useFetch from '../hooks/useFetch';
import Country from "./Country";


const CountryList = () => {
  const {data:countries, loading, error} = useFetch('https://restcountries.com/v3.1/all')
  console.log(countries, 'data');

  return (
    <div className='country-wrapper grid'>
      {countries.map((country)=>(
        <Country 
          countryname={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag={country.flags.png}/>
      ))}
      
    </div>
  )
}

export default CountryList