import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import './ProductDetail.css'
import { doc, getDoc } from 'firebase/firestore'
import { Spin } from 'antd';
import { useCounter } from "../../hooks/useCounter";
import { ToggleButton} from "../../components/Button";
import { db } from '../../services/db'
import { CartContext } from '../../context/CartContext'


export const ProductDetail = ({id, valorInicial}) => {

  const{contador, aumentarContador, disminuirContador} = useCounter(valorInicial)

  const { addProduct, inCart } = useContext(CartContext);

const params = useParams()
const navegate = useNavigate()
const {productId} = params
const onBack = ()=> navegate(-1)
console.log("productId:", productId);

const [product, setProduct]= useState(null)

const handleAddToCart = () => {
  const compra = {
    id: product.id,
    name: product.name,
    price: product.price,
    img: product.img
 };
  if (!inCart(id)) {
     addProduct(compra, contador);
     console.log('(detail)Producto añadido al carrito.');


  } else {
     console.log('(detail)El producto ya está en el carrito.');
  }
 };
 


useEffect(()=>{
const productDB = doc(db, 'Products', productId)
getDoc(productDB)
.then( (product)=>{
  if (product.exists()){
    const productData = product.data();
    setProduct({id: product.id, ...productData})
    console.log(`El productDB de useEffect es ${productDB} y el product es ${JSON.stringify(productData)}   `)
  
  }

})
}, [ productId])


  return (
    <>
    {
      product
      ?
      <div className='card'>
      <div className='card-body'>
      <img src={product.img} className='img-product' alt={`Imagen de ${product.name}`} />
      </div>
      <div className='card-descript'>
      <h3 className='card-title'>{product.name}</h3>
      <h3 className='card-title'>$ {product.price} ARS</h3>
      <div className='buttons-count'>
      <ToggleButton cambiarContador={ ()=>
     disminuirContador(1)}
     text ={'-1'} 
     />
          <h3 className='contador'>{contador}</h3>
           <ToggleButton className='toggle' cambiarContador={ ()=>
     aumentarContador(1)}
     text ={'+1'} 
     />
     </div>
     {
        !inCart(product.id) ? (
          <>
      <button className='button-cart' onClick={() => handleAddToCart()} >ADD TO CART</button>
      <button className='button' onClick={onBack} initial={ 1} >RETURN</button>
      </>
        ):(
          <>
          <Link to="/shop" className='button-cart-shop'> GO TO SHOPPING CART</Link>
          <button className='button' onClick={onBack} initial={ 1} >RETURN</button>
          </>
        )}
      </div>
  </div>
    :
  <div className="spinner-container">
  <Spin size="large"  />
</div>
    }
        </>
  )
}