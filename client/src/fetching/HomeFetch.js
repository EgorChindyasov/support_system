import React, { useState, useEffect } from 'react'
import Home from '../pages/Home'

const HomeFetch = () => {
    const [objects, setObjects] = useState([])

    useEffect(() => {
        fetch('/api/server')
        .then(res => res.json())
        .then(
            (result) => {
                setObjects(result)
            }
        )
    }, [])
    
    return (
        objects.map(message => {
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


