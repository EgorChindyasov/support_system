import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import './App.css'

function App() {

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/api/server')
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

  if (error) {
    return <div>Ошибка: {error.message}</div>
  } 
  
  else if (!isLoaded) {
    return <div>Загрузка...</div>
  } 
  
  else {
  let MessageComponent = items.map(message => {
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

  return (
    <div className='App'>
      {MessageComponent}
    </div>
  )
}
}

export default App
