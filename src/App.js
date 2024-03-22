import React from 'react'
import Signup from './Signup'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Apis from './Apis'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />}></Route>
          <Route path='/api' element={<Apis />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
