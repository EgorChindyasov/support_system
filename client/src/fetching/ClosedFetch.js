import React, { useEffect } from 'react'
import Closed from '../pages/Closed'

const ClosedFetch = ({ data, setDataMatch, searchData, setClosedData }) => {

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
        <Closed 
          id={message.id}
          name={message.name} 
          content={message.content} 
          importance={message.importance}
          setClosedData={setClosedData} 
          key={message.id} 
        />
      )
    })
  )
}

export default ClosedFetch