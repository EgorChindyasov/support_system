import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import HomeFetch from './fetching/HomeFetch'
import HidedFetch from './fetching/HidedFetch'
import ClosedFetch from './fetching/ClosedFetch'
import ButtonsRoute from './components/ButtonsRoute/ButtonsRoute'

import './App.css'

function App() {
    return (
    <BrowserRouter>
    <div className='App'>
      <ButtonsRoute />
      <Route path='/home' component={HomeFetch} />
      <Route path='/hided' component={HidedFetch} /> 
      <Route path='/closed' component={ClosedFetch} /> 
    </div>
    </BrowserRouter>
  )
}

export default App


