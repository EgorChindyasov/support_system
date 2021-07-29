import React, { useState } from 'react'
import InformBlock from '../components/InformBlock/InformBlock'

const URL = 'http://localhost:8080/api'

function Closed ( {id, name, content, importance} ) {
  // состояние отображения блока
  const [showBlock, setShowBlock] = useState(true)

  const [delBlock, setDelBlock] = useState(true)

  const display = () => setShowBlock(prev => !prev)

  const del = () => setDelBlock(prev => !prev)
    
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ 
      name: `${name}`,
      content: `${content}`,
      isitimportant: `${importance}` })
  }

  if (!showBlock) {
      
    fetch(`${URL}/closed/${id}`, { method: 'DELETE' })
    fetch('/api/closed', requestOptions)
      
    return null
  }

  if (!delBlock) {
    
    fetch(`${URL}/closed/${id}`, { method: 'DELETE' })

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