import React, { useState, useEffect } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import ControlPanel from '../ControlPanel/ControlPanel'
import HomeFetch from '../../fetching/HomeFetch'
import HidedFetch from '../../fetching/HidedFetch'
import ClosedFetch from '../../fetching/ClosedFetch'
import ButtonsRoute from '../ButtonsRoute/ButtonsRoute'

import { URLHome, URLHided, URLClosed } from '../../constants'

import './App.css'

// создаем и экспортируем контекст, котоый использеется в компонентах SearchPanel и SortPanel
export const ControlPanelContext = React.createContext()

function App() {

  // данные с сервера, отображаемые на странице home
  const [homeData, setHomeData] = useState([])
  // данные с сервера, отображаемые на странице hided
  const [hidedData, setHidedData] = useState([])
  // данные с сервера, отображаемые на странице closed
  const [closedData, setClosedData] = useState([])

  // строка в поле поиска
  const [searchData, setSearchData] = useState('')

  // если значение поля поиска есть подстрока поля name информационного блока, то dataMatch = true,
  // иначе - false
  const [dataMatch, setDataMatch] = useState(false)

  // определение выбранного типа сортировки
  const [sortPanelOption, setSortPanelOption] = useState(0)

  // функция, вызываемая каждый раз, при переходе на страницу или ее обновлении
  useEffect(() => {
    async function homeFetchAPI() {
        // подключаемся к API сервера 
        let res = await fetch(URLHome)
        // распарсиваем json (получаем массив объектов) 
        res = await res.json()
        // полученный массив заносим в состояние homeData
        setHomeData(res)
    }
    async function hidedFetchAPI() {
      let res = await fetch(URLHided)
      res = await res.json()
      setHidedData(res)
    }
    async function closedFetchAPI() {
      let res = await fetch(URLClosed)
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

  const handleChangeOption = (event) => {
    setSortPanelOption(event.target.value)
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
            <ControlPanelContext.Provider 
              value={
                {
                  searchPanel: [dataMatch, handleChange],
                  sortPanel: [sortPanelOption, handleChangeOption]
                }
              }
            >
              <ControlPanel />
            </ControlPanelContext.Provider>
            <HomeFetch 
              data={search(homeData, searchData)} 
              setDataMatch={setDataMatch}
              searchData={searchData}
              setHomeData={setHomeData} />
          </Route>
          <Route path='/hided'>
            <ControlPanelContext.Provider 
              value={
                {
                  searchPanel: [dataMatch, handleChange], 
                  sortPanel: [sortPanelOption, handleChangeOption]
                }
              }
            >
              <ControlPanel />
            </ControlPanelContext.Provider>
            <HidedFetch 
              data={search(hidedData, searchData)} 
              setDataMatch={setDataMatch}
              searchData={searchData}
              setHidedData={setHidedData} />  
          </Route> 
          <Route path='/closed'>
            <ControlPanelContext.Provider 
              value={
                {
                  searchPanel: [dataMatch, handleChange], 
                  sortPanel: [sortPanelOption, handleChangeOption]
                }
              }
            >
              <ControlPanel />
            </ControlPanelContext.Provider>
            <ClosedFetch 
              data={search(closedData, searchData)} 
              setDataMatch={setDataMatch}
              searchData={searchData}
              setClosedData={setClosedData} />  
          </Route> 
      </div>
    </BrowserRouter>
  )
}

export default App


