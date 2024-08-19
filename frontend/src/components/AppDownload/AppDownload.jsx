import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
    <p>Para una mejor experiencia descargá <br />DINO App</p>
    <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
    </div>
    </div>
  )
}

export default AppDownload