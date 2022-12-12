import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CountryContext } from './CountryContext'
import Nav from './Nav'

const CountryDetails = () => {
  const {countries} = useContext(CountryContext)
  const {id} = useParams()
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  const singleCountry = countries.filter((country)=>{
    return country.name.official === id
  })


  const nativeName = singleCountry.map((item)=>{
    return item.name.nativeName
  })
  const nativeNameValues =  nativeName[0] && Object.values(nativeName[0])

  const officialNativeName = nativeNameValues && (nativeNameValues.length===1 ? nativeNameValues[0].official : nativeNameValues.map((item)=>item.official))



  const currencies = singleCountry.map((item)=>{
    return item.currencies
  })
  const currency = currencies[0] && Object.values(currencies[0])
  console.log(currency, 'curr')

  const officialCurrency = currency && (currency.length===1 ? currency[0].name : currency.map((item)=>item.name))


  return (
    <div className='country-details-container'>
      <Nav/>
        <div className='btn-back' onClick={handleBack}>
          <div><FontAwesomeIcon icon={faArrowLeft}/></div>
          
          <div>Back</div>
        </div>
      {
        singleCountry.map((data)=>(
          <div className='country-det' key={data.name.official}>
            <div className='country-flag-det'>
              <img src={data.flags.svg} alt={data.flag} />
            </div>
          <div className='country-details-det'>
            <h3>{data.name.official}</h3>
            <div>
              <p>Native Name: <span>{officialNativeName}</span></p>
              <p>Population: <span>{data.population}</span></p>
              <p>Region: <span>{data.region}</span></p>
              <p>Sub Region: <span>{data.subregion}</span></p>
              <p>Capital: <span>{data.capital}</span></p>
            </div>
            <div>
              <p>Top Level Domain: <span>{data.tld}</span></p>
              <p>Currencies: <span>{officialCurrency}</span></p>
              <p>Languages: <span>{data.languages.ara}</span></p>
            </div>
            <div>
              <div className='borders-container'>
                <h5>Border Countries:</h5>
                <div className='borders-wrapper'>
                  {data.borders && data.borders.map((border)=>(
                    <div className='border' key={border}>
                      <p>{border}</p>
                    </div>  
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        ))
      }
    </div>
  )
}

export default CountryDetails