import React, { useState } from 'react'
import InformBlock from '../components/InformBlock/InformBlock'

import { URLHided, URLHome } from '../constants'

function Hided ({ id, name, content, importance, setHidedData }) {

  // true если оператор не нажал на кнопку отображения, если нажал - false
  const [displayBlock, setDisplayBlock] = useState(true)

  // true если оператор не нажал на крестик, если нажал - false
  const [delBlock, setDelBlock] = useState(true)

  const display = () => setDisplayBlock(prev => !prev)
  
  const del = () => setDelBlock(prev => !prev)
    
  // параметры POST-запроса
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      id: `${id}`, 
      name: `${name}`,
      content: `${content}`,
      importance: `${importance}` })
  }

  // если оператор нажал на кнопку отображения
  if (!displayBlock) {
      
    fetch(`${URLHided}/${id}`, { method: 'DELETE' })    // из таблицы hided_data удаляем соответстующую запись
    fetch(URLHided, requestOptions)   // отправляем данные удаленного блока на сервер, заносим в таблицу data
    fetch(URLHided, {method: 'GET'})   // получаем обновленные данные из таблицы hided_data
      .then(res => res.json())
      .then(data => setHidedData(data))
      
    return null
  }

  // если оператор нажал на крестик
  if (!delBlock) {
    
    fetch(`${URLHided}/${id}`, { method: 'DELETE' })    // из таблицы hided_data удаляем соответстующую запись
    fetch(URLHome, requestOptions)    // отправляем данные удаленного блока на сервер, заносим в таблицу deleted_data
    fetch(URLHided, {method: 'GET'})   // получаем обновленные данные из таблицы hided_data
      .then(res => res.json())
      .then(data => setHidedData(data))

    return null
  }

    return (
      <div className='AppBlock'>
        <InformBlock id={id} 
                     name={name} 
                     content={content} 
                     importance={importance}
                     display={display}
                     del={del}
                     key={id} />
      </div>
    )
}

export default Hided