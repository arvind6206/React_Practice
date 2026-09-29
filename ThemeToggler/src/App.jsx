import React from 'react'
import Card from './components/Card'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Card/>
    </ThemeProvider>
  )
}

export default App
