import React from 'react'
import './Header.scss'
import logo from '../../Assets/Images/logo.png'

export default () => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <span className='navbar-brand'>
      <img src={logo} className='d-inline-block align-top navbar__logo' alt='' />
      Yogashop
    </span>
  </nav>
)
