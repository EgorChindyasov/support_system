import React, { useEffect } from 'react'
import Hided from '../pages/Hided'

const HidedFetch = ({ data, setDataMatch, searchData, setHidedData }) => {

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
                <Hided 
                    id={message.id}
                    name={message.name} 
                    content={message.content} 
                    importance={message.importance}
                    setHidedData={setHidedData} 
                    key={message.id} 
                />
            )
        })
    )
}

export default HidedFetch
