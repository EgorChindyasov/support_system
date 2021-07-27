import React, { useState } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import HomeFetch from './fetching/HomeFetch'
import HidedFetch from './fetching/HidedFetch'
import ClosedFetch from './fetching/ClosedFetch'
import ButtonsRoute from './components/ButtonsRoute/ButtonsRoute'
import Search from './components/Search/Search'

import './App.css'

export const SearchDataContext = React.createContext()

function App() {

  const [searchData, setSearchData] = useState('')

  const [data, setData] = useState([])

  const handleChange = (event) => {
        setSearchData(event.target.value)
  }

  console.log(searchData)

  return (
    <BrowserRouter>
    <div className='App'>
      <Search 
        handleChange={handleChange} />
      <ButtonsRoute />
        <Route path='/home'>
          <HomeFetch
            data={data}
            setData={setData} />
        </Route>
        <Route path='/hided' component={HidedFetch} /> 
        <Route path='/closed' component={ClosedFetch} />
    </div>
    </BrowserRouter>
  )

  //   return (
  //   <BrowserRouter>
  //   <div className='App'>
  //     <Search 
  //       handleChange={handleChange} />
  //     <ButtonsRoute />
  //       <Route 
  //         path='/home' 
  //         component={HomeFetch} 
  //         searchData={searchData} />
  //       <Route path='/hided' component={HidedFetch} /> 
  //       <Route path='/closed' component={ClosedFetch} />
  //   </div>
  //   </BrowserRouter>
  // )
}

export default App


