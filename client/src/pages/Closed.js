import React, { useState } from 'react'
import InformBlock from '../components/InformBlock/InformBlock'

import { URLClosed } from '../constants'

function Closed ( {id, name, content, importance, setClosedData} ) {
  // true если оператор не нажал на кнопку восстановления, если нажал - false
  const [showBlock, setShowBlock] = useState(true)

  // true если оператор не нажал на крестик, если нажал - false
  const [delBlock, setDelBlock] = useState(true)

  const display = () => setShowBlock(prev => !prev)

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

  // если оператор нажал на кнопку восстановления
  if (!showBlock) {
      
    fetch(`${URLClosed}/${id}`, { method: 'DELETE' })   // из таблицы deleted_data удаляем соответстующую запись
    fetch(URLClosed, requestOptions)    // отправляем данные удаленного блока на сервер, заносим в таблицу data
    fetch(URLClosed, {method: 'GET'})   // получаем обновленные данные из таблицы deleted_data
      .then(res => res.json())
      .then(data => setClosedData(data))
      
    return null
  }

  // если оператор нажал на крестик
  if (!delBlock) {
    
    fetch(`${URLClosed}/${id}`, { method: 'DELETE' })   // из таблицы deleted_data удаляем соответстующую запись
    fetch(URLClosed, {method: 'GET'})   // получаем обновленные данные из таблицы deleted_data
      .then(res => res.json())
      .then(data => setClosedData(data))

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

export default Closed