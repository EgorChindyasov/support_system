import React from 'react'
import Home from '../pages/Home'

const HomeFetch = ({ data }) => {

    // data - массив объектов
    
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


