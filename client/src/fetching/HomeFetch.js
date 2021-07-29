import React, { useEffect } from 'react'
import Home from '../pages/Home'

const HomeFetch = ({ data, setDataMatch }) => {

    // data - массив объектов
    
    useEffect(() => {
      if (data.length === 0) {
        setDataMatch(true)
      }
      else {
        setDataMatch(false)
      }
    }, [data, setDataMatch])

    return (
        data.map(message => {
            return (
                      <Home 
                        id={message.id}
                        name={message.name} 
                        content={message.content} 
                        importance={message.isitimportant} 
                        key={message.id} 
                      />
                    )
        })
    )
}

export default HomeFetch


