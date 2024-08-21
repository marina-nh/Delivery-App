import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Somos una pastelería artesanal dedicada a crear dulces momentos con ingredientes frescos y recetas tradicionales. Nuestra pasión por la pastelería se refleja en cada detalle, brindando productos únicos y hechos con amor.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>QUIENES SOMOS</h2>
                <ul>
                    <li><a href="#header">Inicio</a></li>
                    <li><a href="#header">Sobre Nosotros</a></li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>CONTACTO</h2>
                <ul>
                    <li>+123456789</li>
                    <li>contact@dino.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright © 2024 DINO Pastelería Artesanal. Todos los derechos reservados. Desarrollado por <a href="marinanunez.tech" name="marinanunez">marinanunez.tech</a></p>
    </div>
  )
}

export default Footer