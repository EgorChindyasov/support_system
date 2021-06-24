import React, { useState } from 'react'
import InformBlock from '../components/InformBlock/InformBlock'

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
      
    fetch(`http://localhost:8080/api/closed/${id}`, { method: 'DELETE' })
    fetch('/api/closed', requestOptions)
      
    return null
  }

  if (!delBlock) {
    
    fetch(`http://localhost:8080/api/closed/${id}`, { method: 'DELETE' })

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





// import React, { useState, useEffect} from 'react'
// import InformBlock from '../components/InformBlock/InformBlock'

// function Closed ( {id, name, content, importance} ) {
//   // состояние отображения блока
//   const [showBlock, setShowBlock] = useState(true)

//   const [error, setError] = useState(null)
//   const [isLoaded, setIsLoaded] = useState(false)
//   const [items, setItems] = useState([])

//   useEffect(() => {
//     fetch('/api/closed')
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true)
//           setItems(result)
//         },
//         (error) => {
//           setIsLoaded(true)
//           setError(error)
//         }
//       )
//   }, [])

//   if (error) {
//     return <div>Ошибка: {error.message}</div>
//   } 
  
//   else if (!isLoaded) {
//     return <div>Загрузка...</div>
//   } 

//   const display = () => setShowBlock(prev => !prev) 
    
//   const requestOptions = {
//     method: 'POST',
//     headers: {'Content-Type':'application/json'},
//     body: JSON.stringify({ 
//       name: `${name}`,
//       content: `${content}`,
//       isitimportant: `${importance}` })
//   }

//   if (!showBlock) {
      
//     fetch(`http://localhost:8080/api/closed/${id}`, { method: 'DELETE' })
//     fetch('/api/closed', requestOptions)
      
//     return null
//   }
  
//   else {
//   let MessageComponent = items.map(message => {
//     return (
//       <InformBlock 
//         id={message.id}
//         name={message.name} 
//         content={message.content} 
//         importance={message.isitimportant} 
//         display={display}
//         key={message.id} 
//       />
//     )
//   })

//     return (
//       <div className='AppBlock'>
//         {MessageComponent}
//       </div>
//     )
// }
// }

// export default Closed