import React, { useState } from 'react'
import InformBlock from '../components/InformBlock/InformBlock'

// const Home = ({ data }) => {

//   data.map(item => {
//     return(
//       <div className="AppBlock">
//         <InformBlock 
//           id={item.id} 
//           name={item.name}
//           content={item.content}
//           importance={item.isitimportant}
//           key={item.id} />
//       </div>
//     )
//   })
//     // <div className="AppBlock">
//     //   <InformBlock />
//     // </div>
  
// }

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
