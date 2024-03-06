import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import './ProductDetail.css'
import { doc, getDoc } from 'firebase/firestore'
import img from '../../assets/imgs/FauxLeatherTrench.jpg'
import { Spin } from 'antd';
import { useCounter } from "../../hooks/useCounter";
import { ToggleButton} from "../../components/Button";
import { db } from '../../services/db'
import { CartContext } from '../../context/CartContext'


export const ProductDetail = ({id, name, price, valorInicial}) => {

  const{contador, aumentarContador, disminuirContador} = useCounter(valorInicial)
  const [cantidad, setCantidad] = useState(0)


  // const agregarCantidad =(cantidad)=>{
  //   setCantidad(cantidad)

  //   const compra ={
  //     id, price, name
  //   }

  //   addProduct(compra, cantidad);
  // }

  const agregarCantidad = (cantidad) => {
    setCantidad(cantidad);
  
    addProduct(product, cantidad);
  };


const params = useParams()
const navegate = useNavigate()
const {productId} = params
const onBack = ()=> navegate(-1)
console.log("params:", params);
console.log("productId:", productId);

const [product, setProduct]= useState(null)

const { addProduct } = useContext(CartContext);



useEffect(()=>{
const itemDB = doc(db, 'Products', productId.toString())
getDoc(itemDB)
.then( (product)=>{
  if (product.exists()){
    setProduct({id: product.id, ...product.data()})
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
      <img src={img} className='img-product' alt={`Imagen de ${product.name}`} />
      </div>
      <div className='card-descript'>
      <h3 className='card-title'>{product.name}</h3>
      <h3 className='card-title'>$ {product.price}</h3>
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
        cantidad === 0 ? (
          <>
      <button className='button-cart' onClick={() => agregarCantidad(contador)} >ADD TO CART</button>
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
