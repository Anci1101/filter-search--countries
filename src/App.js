import './scss/scss-style'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import CountryDetails from './components/CountryDetails'
import { CountryProvider } from './components/CountryContext'



function App() {
  return (
    <>
      <CountryProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/CountryDetails/:id' element={<CountryDetails/>}/>
        </Routes>
      </Router>
      </CountryProvider>
    </>
  );
}

export default App;
