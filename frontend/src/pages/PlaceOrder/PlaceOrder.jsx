import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:"",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if (cartItems[item._id]>0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);  
      }
    })
    console.log(orderItems);
  }

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Información de envío </p>
        <div className="multi-fields">
          <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='Nombre' />
          <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Apellido' />
        </div>
        <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email' />
        <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Calle' />
        <div className="multi-fields">
          <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='Ciudad' />
          <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='Departamento' />
        </div>
        <div className="multi-fields">
          <input name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Barrio' />
          <input name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Código postal' />
        </div>
        <input name='phone' onCanPlay={onChangeHandler} value={data.phone} type="text" placeholder='Teléfono' />
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
          <button type='submit'>PAGAR</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder