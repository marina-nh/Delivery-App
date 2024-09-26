import React, { useContext, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';

const MyOrders = () => {

    const {url,token} = useContext(StoreContext);
    const [data,setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/useorders",{},{headers:{token}});
        setData(response.data.data);
    }

  return (
    <div>

    </div>
  )
}

export default MyOrders