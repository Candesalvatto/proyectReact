import React, { useContext } from 'react';
import './Shop.css'
import { CartContext } from '../../context/CartContext';
import { ProductDetail } from '../ProductDetail/ProductDetail';

export const Shop = () => {

  const {cart, addProduct, deleteProduct, cantidadTotal} = useContext (CartContext)



  if (cantidadTotal() === 0){
    return(
      <div>EL CARRITO ESTA VACIO</div>
    )
  }
  else{

  return (
    <div className="checkout-container">
      <h2>COMPRAS</h2>
      <div>
      {cart.map((item, index) => (
      <section className='producto-carrito' key={index}>
        <h4>{item.name}</h4>
        <h4>${item.price}</h4>
        <h4>{item.cantidad}</h4>
        <ProductDetail addProduct={addProduct} />
        <button onClick={()=> deleteProduct(item.id)} className='boton-carrito2'>X</button>
      </section>
      ))}
    </div>


      <button className="checkout-button">Proceed to Payment</button>
    </div>
  );
};
}

