import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

 useEffect(() => {
   const fetchData = () => {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setData(res)
            setLoading(false)
            setError(null)
        })
        .catch(error => {
            setLoading(false)
            setError(error.message)
        })
   }
   fetchData()
 }, [url])
 return {error, loading, data}
}

export default useFetch