import React, { useEffect } from 'react'
import Hided from '../pages/Hided'

const HidedFetch = ({ data, setDataMatch, searchData, setHidedData, sortPanelOption }) => {

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
