import React, { useContext, useState } from 'react'
import { CountryContext } from './CountryContext'
import CountryList from './CountryList'
import FilterInput from './FilterInput'
import Nav from './Nav'
import Search from './Search'

const Home = () => {

  const {countries} = useContext(CountryContext)

  const [currentRegion, setCurrentRegion] = useState('')

  const handleFilterRegion = ( region) => {
    setCurrentRegion(region)
  }

  const filteredCountriesByRegion = (countries, currentRegion) => {
    return countries.filter((country)=>country.region === currentRegion
  )}

  return (
    <div className='container'>
    <Nav/>
       <div className='search-filter-wrapper'>
         <Search/>
         <FilterInput handleFilterRegion={handleFilterRegion}/>
       </div>
     {countries && <CountryList countries={currentRegion ? filteredCountriesByRegion(countries, currentRegion) : countries}/>}
    </div>
  )
}

export default Home