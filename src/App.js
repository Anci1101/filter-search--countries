import './scss/scss-style'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import CountryDetails from './components/CountryDetails'
import { CountryProvider } from './components/CountryContext'
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null)


function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr)=>(curr === 'light' ? 'dark' : 'light'))
    console.log('theme')
  }

  return (
    <>
    <ThemeContext.Provider value={{theme, toggleTheme, setTheme}}>
    <div  id={theme}>
      <CountryProvider>
      <Router>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/CountryDetails/:id' element={<CountryDetails/>}/>
         
        </Routes>
      </Router>
      </CountryProvider>
      </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
