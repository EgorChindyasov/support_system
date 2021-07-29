import React, { useState, useEffect } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Search from './components/Search/Search'
import HomeFetch from './fetching/HomeFetch'
import HidedFetch from './fetching/HidedFetch'
import ClosedFetch from './fetching/ClosedFetch'
import ButtonsRoute from './components/ButtonsRoute/ButtonsRoute'

import './App.css'

function App() {

  // данные с сервера, отображаемые на странице home
  const [homeData, setHomeData] = useState([])
  // данные с сервера, отображаемые на странице hided
  const [hidedData, setHidedData] = useState([])
  // данные с сервера, отображаемые на странице closed
  const [closedData, setClosedData] = useState([])

  // строка в поле поиска
  const [searchData, setSearchData] = useState('')

  const [searchDataNotFound, setSearchDataNotFound] = useState(false)

  // функция, вызываемая каждый раз, при переходе на страницу или ее обновлении
  useEffect(() => {
    async function homeFetchAPI() {
        // подключаемся к API сервера 
        let res = await fetch('/api/server')
        // распарсиваем json (получаем массив объектов) 
        res = await res.json()
        // полученный массив заносим в состояние homeData
        setHomeData(res)
    }
    async function hidedFetchAPI() {
      let res = await fetch('/api/hided')
      res = await res.json()
      setHidedData(res)
    }
    async function closedFetchAPI() {
      let res = await fetch('/api/closed')
      res = await res.json()
      setClosedData(res)
    }
    // если путь к ресурсу /home
    if (window.location.pathname === '/home')
      homeFetchAPI()
    // если путь к ресурсу /hided
    if (window.location.pathname === '/hided')
      hidedFetchAPI()
    // если путь к ресурсу /closed
    if (window.location.pathname === '/closed')
      closedFetchAPI()
}, [])

  // получаем строку, вводимую в поле поиска  
  const handleChange = (event) => {
    setSearchData(event.target.value)
  }

  // поиск блока
  // items - массив объектов (с сервера), searchString - строка в поле поиска
  const search = (items, searchString) => { 

    // если в поле поиска пусто, то возвращаем весь массив
    if (searchString === 0)
      return items

    // иначе производим фильтрацию
    return items.filter(item => item.name
                                    .toLowerCase()
                                    .indexOf(searchString.toLowerCase()) > -1)
  }

  return (
    <BrowserRouter>
      <div className='App'>
        <ButtonsRoute />
          <Route path='/home'>
            <Search handleChange={handleChange} />
            <HomeFetch data={search(homeData, searchData)} />
          </Route>
          <Route path='/hided'>
            <Search handleChange={handleChange} />
            <HidedFetch data={search(hidedData, searchData)} />  
          </Route> 
          <Route path='/closed'>
            <Search handleChange={handleChange} />
            <ClosedFetch data={search(closedData, searchData)} />  
          </Route> 
      </div>
    </BrowserRouter>
  )
}

export default App


