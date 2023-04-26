import { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const CountryContext = createContext()

export const CountryProvider = (props) => {
    const {data:countries, loading, error} = useFetch('https://restcountries.com/v3.1/all')

    return(
        <CountryContext.Provider value={{countries, loading, error}}>
            {props.children}
        </CountryContext.Provider>
    )
}