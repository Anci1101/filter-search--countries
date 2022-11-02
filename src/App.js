import './scss/scss-style'
import Nav from './components/Nav'
import Search from './components/Search'
import FilterInput from './components/FilterInput'
import CountryList from './components/CountryList'



function App() {
  return (
    <div className='container'>
      <Nav/>
        <div className='search-filter-wrapper'>
          <Search/>
          <FilterInput/>
        </div>
      <CountryList/>
    </div>
  );
}

export default App;
