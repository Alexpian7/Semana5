import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Med from './Components/Medio/Med'
import Section from './Components/Section/Section'
import Article from './Components/Article/Article'
import Footer from './Components/Footer/Footer'
import Articulo from './Components/Aticulo/Articulo'
import Section2 from './Components/Section2/Section2'



function App() {

  return (
    <div>
    <Header />
    <Med />
    <Section/>
    <Section2 />
    <Article/>
    <Articulo/>
    <Footer/>
    </div>
    
  )
}

export default App
