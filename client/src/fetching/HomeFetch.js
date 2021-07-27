import React, { useEffect } from 'react'
import Home from '../pages/Home'

const HomeFetch = ({ data, setData }) => {
    
    useEffect(() => {
        async function fetchAPI() {
            let res = await fetch('/api/server')
            res = await res.json()
            setData(res)
        }
        fetchAPI()
    }, [])

    return (
        <div>
            <Home data={data} />
        </div>
    )
}

export default HomeFetch


