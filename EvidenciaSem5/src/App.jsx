import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Med from './Components/Medio/Med'
import Section from './Components/Section/Section'
import Article from './Components/Article/Article'
import Footer from './Components/Footer/Footer'



function App() {

  return (
    <div>
    <Header />
    <Med />
    <Section/>
    <Section/>
    <Article/>
    <Footer/>
    </div>
    
  )
}

export default App
