import React, { useEffect } from 'react'
import Home from '../pages/Home'

const HomeFetch = ({ data, setDataMatch, searchData, setHomeData }) => {

    // data - массив объектов

    useEffect(() => {
      if (data.length === 0 && searchData != 0) {
        setDataMatch(true)
      }
      else {
        setDataMatch(false)
      }
    }, [data, setDataMatch, searchData])

    return (
        data.map(message => {
            return (
                      <Home 
                        id={message.id}
                        name={message.name} 
                        content={message.content} 
                        importance={message.importance}
                        setHomeData={setHomeData} 
                        key={message.id} 
                      />
                    )
        })
    )
}

export default HomeFetch


