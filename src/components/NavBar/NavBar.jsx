import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './NavBar.css'
import { CartWidget } from './CartWidget/CartWidget'






export const NavBar = () => {


  return (
    <nav className='navbar'>
            <Link to='/'>

                </Link>
        <ul className='navbar-ul'>
        <li className='navbar-li'>
          </li>
          <li className='navbar-li'>
            <NavLink to='/' className='navbar-link' >HOME</NavLink>
          </li>
          <li className='navbar-li'>
            <NavLink to='/products/all' className='navbar-link' >SHOP ALL</NavLink>
          </li>
          <li className='navbar-li'>
            <NavLink to='/products/001' className='navbar-link' >DROP 001</NavLink>
          </li>
          <li className='navbar-li'>
            <NavLink to='/products/002' className='navbar-link' >DROP 002</NavLink>
          </li>
          <li className='navbar-li'>
            <NavLink to='/products/003' className='navbar-link' >DROP 003</NavLink>
          </li>
          <li className='navbar-li'>
            <NavLink to='/products/004' className='navbar-link' >DROP 004</NavLink>
          </li>
          <li className='navbar-li'>
            <CartWidget/>
          </li>
        </ul>
    </nav>


  )
}
