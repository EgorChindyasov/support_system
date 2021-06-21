import React, { useState, useEffect } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home'
import Closed from './pages/Closed'
import './App.css'

function App() {

  const [errorH, setErrorH] = useState(null)
  const [isLoadedH, setIsLoadedH] = useState(false)
  const [itemsH, setItemsH] = useState([])

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/api/server')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoadedH(true)
          setItemsH(result)
        },
        (error) => {
          setIsLoadedH(true)
          setErrorH(error)
        }
      )
  }, [])

  useEffect(() => {
    fetch('/api/closed')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (errorH) {
    return <div>Ошибка: {errorH.message}</div>
  } 
  
  else if (!isLoadedH) {
    return <div>Загрузка...</div>
  } 
  
  else {
  let MessageComponentH = itemsH.map(message => {
    return (
      <Home 
        id={message.id}
        name={message.name} 
        content={message.content} 
        importance={message.isitimportant} 
        key={message.id} 
      />
    )
  })

  // ____________________________________________

  // useEffect(() => {
  //   fetch('/api/closed')
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true)
  //         setItems(result)
  //       },
  //       (error) => {
  //         setIsLoaded(true)
  //         setError(error)
  //       }
  //     )
  // }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>
  } 
  
  else if (!isLoaded) {
    return <div>Загрузка...</div>
  } 
  
  else {
  let MessageComponent = items.map(message => {
    return (
      <Closed 
        id={message.id}
        name={message.name} 
        content={message.content} 
        importance={message.isitimportant} 
        key={message.id} 
      />
    )
  })

  return (
    <BrowserRouter>
    <div className='App'>
      <Route path='/home' children={MessageComponentH} />
      <Route path='/closed' children={MessageComponent} />
    </div>
    </BrowserRouter>
  )
}

}
}

export default App


// import React from 'react'
// import {BrowserRouter, Route} from 'react-router-dom'
// import Home from './pages/Home'
// import Closed from './pages/Closed'
// import './App.css'

// function App() {

//   return (
//     <BrowserRouter>
//     <div className='App'>
//       <Route path='/home' component={Home} />
//       <Route path='/closed' component={Closed}/>
//     </div>
//     </BrowserRouter>
//   )
// }

// export default App

