import React, { useState, useEffect } from 'react'
import Home from '../pages/Home'

const HomeFetch = ({ data, setData }) => {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('/api/server')
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             setData(result)
    //         }
    //     )
    // }, [])

// ---------------------------------------------------------
    
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

// --------------------------------------------------

//     return (

//         data.map(message => {
//             return (
//                       <Home 
//                         id={message.id}
//                         name={message.name}
//                         content={message.content} 
//                         importance={message.isitimportant}
//                         searchData={searchData} 
//                         key={message.id} 
//                       />
//                     )
//         })
//     )
// }

export default HomeFetch


