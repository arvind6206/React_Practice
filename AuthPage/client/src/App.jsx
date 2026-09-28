import React from 'react'
import Login from './components/Login'
import { Route, Router, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    </div>
  )
}

export default App
