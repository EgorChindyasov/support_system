import React, { useEffect } from 'react'
import Closed from '../pages/Closed'

const ClosedFetch = ({ data, setDataMatch }) => {

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