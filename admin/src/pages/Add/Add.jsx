import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {

    const [image,setImage] = useState(false);

  return (
    <div className='add'>
        <form className='flex-col'>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
            </div>
            <div className="add-product-name flex-col">
                <p>Product name</p>
                <input type="text" name='name' placeholder='Type here' />
            </div>
            <div className="add-product-description flex-col">
                <p>Product description</p>
                <textarea name="description" rows="6" placeholder='Write content here'></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product category</p>
                    <select name="category">
                        <option value="Alfajores">Alfajores</option>
                        <option value="Budines">Budines</option>
                        <option value="Chessecakes">Chessecakes</option>
                        <option value="Sándwiches">Sándwiches</option>
                        <option value="Tortas">Tortas</option>
                        <option value="Panaderia">Panaderia</option>
                        <option value="Postres">Postres</option>
                        <option value="Meriendas">Meriendas</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product price</p>
                    <input type="Number" name='price' placeholder='$2000'/>
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>

    </div>
  )
}

export default Add