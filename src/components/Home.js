import React from 'react'
import CountryList from './CountryList'
import FilterInput from './FilterInput'
import Nav from './Nav'
import Search from './Search'

const Home = () => {
  return (
    <div className='container'>
    <Nav/>
       <div className='search-filter-wrapper'>
         <Search/>
         <FilterInput/>
       </div>
     <CountryList/>
    
  </div>
  )
}

export default Home