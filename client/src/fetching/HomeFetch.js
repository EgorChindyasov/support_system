import React, { useEffect } from 'react'
import Home from '../pages/Home'

const HomeFetch = ({ data, setDataMatch, searchData, setHomeData, sortPanelOption }) => {

    // data - массив объектов

  // обрабатываем сортировку 'По-умолчанию'
  useEffect(() => {
    if (data.length === 0 && searchData != 0) {
      setDataMatch(true)
    }
    else {
      setDataMatch(false)
    }
  }, [data, setDataMatch, searchData])

  useEffect(() => {
    // обрабатываем сортировку 'Сначало ошибки'
    if (sortPanelOption === '1') {
      data.map(item => {
        if (item.importance === false) {
          if (searchData != 0)
            setDataMatch(true)
          else
            setDataMatch(false)
        }
      })
    }

    // обрабатываем сортировку 'Сначало предупреждения'
    if (sortPanelOption === '2') {
      data.map(item => {
        if (item.importance === true) {
          if (searchData != 0)
            setDataMatch(true)
          else
            setDataMatch(false)
        }
      })
    }
  }, )

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


