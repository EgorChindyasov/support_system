import React from 'react'
import Closed from '../pages/Closed'

const ClosedFetch = ({ data }) => {

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