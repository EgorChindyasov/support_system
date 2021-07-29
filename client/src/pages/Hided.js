import React, { useState } from 'react'
import InformBlock from '../components/InformBlock/InformBlock'

const URL = 'http://localhost:8080/api'

function Hided ( {id, name, content, importance} ) {

  const [displayBlock, setDisplayBlock] = useState(true)

  const [delBlock, setDelBlock] = useState(true)

  const display = () => setDisplayBlock(prev => !prev)
  
  const del = () => setDelBlock(prev => !prev)
    
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ 
      name: `${name}`,
      content: `${content}`,
      isitimportant: `${importance}` })
  }

  if (!displayBlock) {
      
    fetch(`${URL}/hided/${id}`, { method: 'DELETE' })
    fetch('/api/hided', requestOptions)
      
    return null
  }

  if (!delBlock) {
    
    fetch(`${URL}/hided/${id}`, { method: 'DELETE' })
    fetch('/api/server', requestOptions)

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