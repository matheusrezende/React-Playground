import React from 'react'
import './ImageBanner.scss'

export default ({src, title}) => (
  <div className='image-banner'>
    <div className='image-banner__overlay' />
    <img src={src} alt='Event logo' />
    <span>{title}</span>
  </div>
)
