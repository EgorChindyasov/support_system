import React, { useState } from 'react'
import InformBlock from '../components/InformBlock/InformBlock'

import { URLHome } from '../constants'

function Home ({ id, name, content, importance, setHomeData }) {
  
  // true если оператор не нажал на крестик, если нажал - false
  const [showBlock, setShowBlock] = useState(true)

  // true если оператор не нажал на кнопку скрытия, если нажал - false
  const [hideBlock, setHideBlock] = useState(true)

  const display = () => setShowBlock(prev => !prev)

  const hide = () => setHideBlock(prev => !prev)
    
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

  // если оператор нажал на крестик
  if (!showBlock) {
      
    fetch(`${URLHome}/${id}`, { method: 'DELETE' })   // из таблицы data удаляем соответстующую запись
    fetch(URLHome, requestOptions)    // отправляем данные удаленного блока на сервер, заносим в таблицу deleted_data
    fetch(URLHome, {method: 'GET'})   // получаем обновленные данные из таблицы data
      .then(res => res.json())
      .then(data => setHomeData(data))
      
    return null
  }

  // если оператор нажал на кнопку скрытия
  if (!hideBlock) {

    fetch(`${URLHome}/${id}`, { method: 'DELETE' })   // из таблицы data удаляем соответстующую запись
    fetch(`${URLHome}/hide`, requestOptions)    // отправляем данные удаленного блока на сервер, заносим в таблицу hided_data
    fetch(URLHome, {method: 'GET'})   // получаем обновленные данные из таблицы data
      .then(res => res.json())
      .then(data => setHomeData(data))

    return null
  }

    return (
      <div className='AppBlock'>
        <InformBlock id={id} 
                     name={name} 
                     content={content} 
                     importance={importance}
                     display={display}
                     hide={hide}
                     key={id} />
      </div>
    )
}

export default Home
