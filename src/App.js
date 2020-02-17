import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'

function App () {
  return (
    <div className='App'>
      <NavBar />
      <Content />
      <Footer />
    </div>
  )
}

export default App
