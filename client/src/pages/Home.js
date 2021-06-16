import React, { useState } from 'react'
import InformBlock from '../components/InformBlock/InformBlock'

function Home ( {id, name, content, importance} ) {
  // состояние отображения блока
  const [showBlock, setShowBlock] = useState(true)

  const [status, setStatus] = useState(null);

  const display = () => setShowBlock(prev => !prev) 
    
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ 
      name: `${name}`,
      content: `${content}`,
      isitimportant: `${importance}` })
  }

  if (!showBlock) {
      
    fetch(`http://localhost:8080/api/delete/${id}`, { method: 'DELETE' })
    // .then(() => setStatus('Delete successful'))
    fetch('/api/server', requestOptions)
      
    return null
  }

  // if (showBlock === false) {
  //   fetch('/api/server', requestOptions)
  //     .then(response => response.json())
  // }

    return (
      <div className='AppBlock'>
        <InformBlock id={id} 
                     name={name} 
                     content={content} 
                     importance={importance}
                     display={display}
                     key={id} />
      </div>
    )
}

export default Home