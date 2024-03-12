import React, { useContext } from 'react';
import './Shop.css'
import { CartContext } from '../../context/CartContext';
import { Card } from 'antd';
import { Link } from 'react-router-dom';


export const Shop = () => {

  const {cart, deleteProduct, cartTotal, isOrderSuccessful} = useContext (CartContext)


  if (cart.length === 0 || isOrderSuccessful){
    return(
      <div className="container-delete">
      <h2>YOUR CART IS EMPTY</h2>
      </div>
    )
  }
  else{

  return (
    <div className='container-all'> 
    <div className="checkout-container">
      <h2>BAG</h2>
      {cart.map((product) => (
          <Card 
          key={product.id}
          title={<h4 style={{ fontFamily: "Rajdhani, sans-serif" }}>{product.name}</h4>}
          extra={<button onClick={()=> deleteProduct(product.id)} 
          className='boton-carrito2'
          style={{ position: "absolute", top: '-10px', right: '5px' }}>X</button>} 
          className='producto-carrito'>
            <div className='container-desc-card'>
            <div className='container-img-card'>
              <img src={product.img} style={{'width':'140px'}} alt={`Imagen de ${product.name}`} />
            </div>
            <div className='container-desc'>
        <h5>$ {product.price} ARS</h5>
        <h6>{product.cantidad} UNITS</h6>
        </div>
        </div>
        </Card>
      ))}
</div>



<div className='container-pay'>
  <h4>YOU HAVE EARNED FREE SHIPPING</h4>
  <hr></hr>
  <div className='sub-total'>
  <h5>SUBTOTAL:</h5>
  <h5>${cartTotal()} ARS</h5>
  </div>
  <div className='container-checkout-button'>
      <Link to='/shop/checkoutform' className="checkout-button">CHECKOUT</Link>
      </div>
      </div>

    </div>
  );
};



}


