import { useContext } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import '../NavBar.css'
import {CartContext} from '../../../context/CartContext'


export const CartWidget = () => {

  const {cantidadTotal, isOrderSuccessful} = useContext (CartContext);

  
  return (
    <>
      <Link to="/shop" className="navbar-link">
        SHOPPING CART
        {!isOrderSuccessful && !!cantidadTotal() && (
          <span className="cart-total-notification">{cantidadTotal()}</span>
        )}
      </Link>
    </>
  )
}

 
