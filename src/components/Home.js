import React, { useContext, useEffect, useState } from 'react'
import { CountryContext } from './CountryContext'
import CountryList from './CountryList'
import FilterInput from './FilterInput'
import Nav from './Nav'
import Search from './Search'

const Home = () => {

  const {countries} = useContext(CountryContext)

  const [filteredCountriesByRegion, setFilteredCountriesByRegion] = useState([])

  const [filteredData, setFilteredData] = useState(countries)

  const [searchedWord, setSearchedWord] = useState('')

  useEffect(() => {
    setFilteredData(countries)
  }, [countries])
  

  const handleFilterRegion = (e) => {
    const region = e.target.name
    const dropdownFilteredCountries = countries.filter((country)=>country.region === region)

    const checkedSreachWord = searchedWord !== '' ? dropdownFilteredCountries.filter((country)=>{
      return country.name.common.toLowerCase().includes(searchedWord.toLowerCase())
    }) : dropdownFilteredCountries

    setFilteredCountriesByRegion(checkedSreachWord)
    setFilteredData(checkedSreachWord)
  }


const handleSearch = (e) => {
  const searchInput = e.target.value
  setSearchedWord(searchInput)
  const countriesToSearch = filteredCountriesByRegion.length !== 0 ? filteredCountriesByRegion : countries

  const filteredCountriesBySearchInput = countriesToSearch.filter((country)=>{
    return country.name.common.toLowerCase().includes(searchInput.toLowerCase())
  })

  setFilteredData(filteredCountriesBySearchInput)
}


  return (
    <div className='container'>
    <Nav/>
       <div className='search-filter-wrapper'>
         <Search countries={countries} handleSearch={handleSearch}/>
         <FilterInput handleFilterRegion={handleFilterRegion}/>
       </div>
     {countries && <CountryList countries={filteredData}/>}
    </div>
  )
}

export default Home