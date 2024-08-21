import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Conocé nuestros productos</h1>
        <p className="explore-menu-text">En nuestra pastelería artesanal, cada creación es una obra de amor. Utilizamos ingredientes frescos y de la mejor calidad para elaborar una variedad de productos que deleitarán tus sentidos. Desde alfajores y tortas hasta galletas y chessecakes, nuestros productos se distinguen por su sabor casero, sus presentaciones únicas y ese toque especial que solo lo artesanal puede ofrecer.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category==item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu