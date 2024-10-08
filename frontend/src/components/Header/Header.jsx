import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header' id='header'>
        <div className="header-contents">
            <h2>Pastelería Artesanal Dino</h2>
            <p>Descubre la dulzura de lo hecho a mano. En nuestra pastelería, cada creación es única, elaborada con ingredientes frescos y mucho amor para endulzar tus momentos más especiales.</p>
            <a href="#food-display">Mirá nuestras opciones</a>
        </div>
    </div>
  )
}

export default Header