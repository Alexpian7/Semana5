import React from 'react'
import './Header.css'
import Img from '../../assets/muj.png'

function Header() {
  return (
   
    <header className="header">
        <span><h1>Header</h1></span>
        <nav className="nav">
            <a className="nav1" href="">Home</a>
            <a className="nav2" href="">Acerca de</a>
            <a className="nav3" href="">Contactanos</a>
        </nav>
        <div className="img">
            <img className="fot" src={Img}alt="" srcset="" />
        </div>
    </header>
    
  )
}

export default Header
