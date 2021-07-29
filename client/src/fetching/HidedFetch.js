import React from 'react'
import Hided from '../pages/Hided'

const HidedFetch = ({ data }) => {

    // data - массив объектов

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
