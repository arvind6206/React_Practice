import React from 'react'
import Login from './components/Login'
import { Route, Router, Routes } from 'react-router-dom'
import Signup from './components/Signup'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default App
