import React, { useState } from 'react'
import InformBlock from '../components/InformBlock/InformBlock'

function Home ( {id, name, content, importance} ) {
  // состояние отображения блока
  const [showBlock, setShowBlock] = useState(true)

  const [status, setStatus] = useState(null);

  const display = () => setShowBlock(prev => !prev) 
    
  if (!showBlock) {
      
    fetch(`http://localhost:8080/api/post/${id}`, { method: 'DELETE' })
    .then(() => setStatus('Delete successful'))
      
    return null
  }

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