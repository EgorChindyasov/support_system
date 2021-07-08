import React, { useState, useEffect } from 'react'
import Closed from '../pages/Closed'

const ClosedFetch = () => {
    const [objects, setObjects] = useState([])

    useEffect(() => {
        fetch('/api/closed')
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
                <Closed 
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

export default ClosedFetch