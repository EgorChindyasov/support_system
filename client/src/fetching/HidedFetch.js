import React from 'react'
import Hided from '../pages/Hided'

const HidedFetch = ({ data, setDataMatch, searchData, setHidedData }) => {

  // data - массив объектов

  if (data.length === 0 && searchData != 0) {
    setDataMatch(true)
  }
  else {
    setDataMatch(false)
  }
  
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
