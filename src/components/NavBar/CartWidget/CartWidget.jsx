import { useContext } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import '../NavBar.css'


export const CartWidget = () => {

  const {cantidadTotal} = useContext (CartContext)


  return (
    <>
        <Link to= '/shop' className="navbar-link">SHOPPING CART 
        <span className="cart-total-notification">{cantidadTotal}</span>
        </Link>
    </>
  )
}

 
