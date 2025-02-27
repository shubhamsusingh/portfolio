import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <About/>
      <Skill/>
      <Contact/>
      <Footer/>
    
    </>
  )
}

export default App
