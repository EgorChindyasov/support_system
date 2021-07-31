import React from 'react'
import Home from '../pages/Home'

const HomeFetch = ({ data, setDataMatch, searchData, setHomeData }) => {

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
        <Home 
          id={message.id}
          name={message.name} 
          content={message.content} 
          importance={message.importance}
          setHomeData={setHomeData} 
          key={message.id} 
        />
      )
    })
  )
}

export default HomeFetch


