import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"

const LoginPopup = ({setShowLogin}) => {


    const {url,setToken} = useContext(StoreContext)


    const [currState,setCurrState] = useState("Iniciar sesión")
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event) => {
         const name = event.target.name;
         const value = event.target.value;
         setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url;
        if (currState==="Iniciar sesión") {
            newUrl += "/api/user/login"
        }
        else{
            newUrl += "/api/user/resgister"
        }

        const respose = await axios.post(newUrl,data);

        if (respose.data.success) {
            setToken(respose.data.token);
            localStorage.setItem("token",respose.data.token);
            setShowLogin(false)
        }
        else{
            alert(respose.data.message)
        }
    }


  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Iniciar sesión"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Tu nombre' required/>}
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Tu email' required/>
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Tu contraseña' required/>
            </div>
            <button type='submit'>{currState==="Registrarse"?"Crea una cuenta":"Iniciar sesión"}</button>
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