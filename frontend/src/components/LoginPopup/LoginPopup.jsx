import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Iniciar sesión")

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Iniciar sesión"?<></>:<input type="text" placeholder='Tu nombre' required/>}
                <input type="email" placeholder='Tu email' required/>
                <input type="password" placeholder='Tu contraseña' required/>
            </div>
            <button>{currState==="Registrarse"?"Crea una cuenta":"Iniciar sesión"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>Para continuar, he leído y acepto los términos y condiciones de uso.</p>
            </div>
            {currState==="Iniciar sesión"
            ?<p>¿Crear una nueva cuenta? <span onClick={()=>setCurrState("Registrarse")}>Click aquí</span></p>
            :<p>¿Ya tienes una cuenta? <span onClick={()=>setCurrState("Iniciar sesión")}>Inicia sesión</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup