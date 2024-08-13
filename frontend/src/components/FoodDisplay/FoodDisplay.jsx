import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = ({category}) => {

    const { food_list } = useContext(StoreContext)

    return (
        <div className='food-display' id='food-display'>
            <h2>Nuestro Top</h2>
            <div className='food-display-list'>
                {food_list.map((item,index)=>{
                    return
                })}
            </div>
        </div>
    )
}

export default FoodDisplay