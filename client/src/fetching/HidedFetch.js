import React, { useState, useEffect } from 'react'
import Hided from '../pages/Hided'

const HidedFetch = () => {
    const [objects, setObjects] = useState([])

    useEffect(() => {
        fetch('/api/hided')
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
                <Hided 
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

export default HidedFetch
