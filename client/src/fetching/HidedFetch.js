import React, { useEffect } from 'react'
import Hided from '../pages/Hided'

const HidedFetch = ({ data, setDataMatch }) => {

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
