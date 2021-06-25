import React, { useState } from 'react'
import InformBlock from '../components/InformBlock/InformBlock'

function Home ( {id, name, content, importance} ) {
  // состояние отображения блока
  const [showBlock, setShowBlock] = useState(true)

  const [hideBlock, setHideBlock] = useState(true)

  const display = () => setShowBlock(prev => !prev)

  const hide = () => setHideBlock(prev => !prev)
    
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ 
      name: `${name}`,
      content: `${content}`,
      isitimportant: `${importance}` })
  }

  if (!showBlock) {
      
    fetch(`http://localhost:8080/api/server/${id}`, { method: 'DELETE' })
    fetch('/api/server', requestOptions)
      
    return null
  }

  if (!hideBlock) {

    fetch(`http://localhost:8080/api/server/${id}`, { method: 'DELETE' })
    fetch('/api/server/hide', requestOptions)

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


// import React, { useState, useEffect} from 'react'
// import InformBlock from '../components/InformBlock/InformBlock'

// function Home () {
//   // состояние отображения блока
//   const [showBlock, setShowBlock] = useState(true)

//   const [error, setError] = useState(null)
//   const [isLoaded, setIsLoaded] = useState(false)
//   const [items, setItems] = useState([])

//   const display = () => setShowBlock(prev => !prev)

//   useEffect(() => {
//     fetch('/api/server')
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
//   else {
//     let MessageComponent = items.map(message => {
//       return (
//         <InformBlock 
//           id={message.id}
//           name={message.name} 
//           content={message.content} 
//           importance={message.isitimportant} 
//           display={display}
//           key={message.id} 
//         />
//       )
//     })
 
    
//   // const requestOptions = {
//   //   method: 'POST',
//   //   headers: {'Content-Type':'application/json'},
//   //   body: JSON.stringify({ 
//   //     name: `${name}`,
//   //     content: `${content}`,
//   //     isitimportant: `${importance}` })
//   // }

//   if (!showBlock) {
//     // items.map(id => fetch(`http://localhost:8080/api/closed/${id.id}`, { method: 'DELETE' }))  
//     // // fetch(`http://localhost:8080/api/closed/${id}`, { method: 'DELETE' })
//     // fetch('/api/server', requestOptions)
      
//     return null
//   }
  
//   // else {
//   // let MessageComponent = items.map(message => {
//   //   return (
//   //     <InformBlock 
//   //       id={message.id}
//   //       name={message.name} 
//   //       content={message.content} 
//   //       importance={message.isitimportant} 
//   //       display={display}
//   //       key={message.id} 
//   //     />
//   //   )
//   // })

//     return (
//       <div className='AppBlock'>
//         {MessageComponent}
//       </div>
//     )
// }
// }

// export default Home