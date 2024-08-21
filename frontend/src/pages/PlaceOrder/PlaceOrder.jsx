import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Información de envío </p>
        <div className="multi-fields">
          <input type="text" placeholder='Nombre' />
          <input type="text" placeholder='Apellido' />
        </div>
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Calle' />
        <div className="multi-fields">
          <input type="text" placeholder='Número' />
          <input type="text" placeholder='Departamento' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Barrio' />
          <input type="text" placeholder='Código postal' />
        </div>
        <input type="text" placeholder='Teléfono' />
      </div>
      
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Total de compra</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery</p>
              <p>${getTotalCartAmount()===0?0:2000}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2000}</b>
            </div>
          </div>
          <button>PAGAR</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder