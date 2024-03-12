import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Products 001/Products.css'
import {collection, getDocs, query, where} from 'firebase/firestore'
import banner from '../../assets/imgs/DROP004_2.jpg'
import { Spin } from 'antd';
import { useForm } from '../../hooks/useForm'
import search from '../../assets/imgs/buscar.png'
import { db } from '../../services/db'

export const ProductsAll = () => {



const [products, setProducts]=  useState([])
const { form, handleInputChange } = useForm({ lookFor: '' });
const [filteredProducts, setFilteredProducts] = useState([]);

useEffect(() => {
  const productsDB= collection( db, 'Products')

  getDocs(productsDB)
  .then( products =>{
   setProducts( products.docs.map( doc =>({id: doc.id, ...doc.data()})))
  }
  )


}, [])

useEffect(() => {
  setFilteredProducts(
    products.filter(product => product.name.toLowerCase().includes(form.lookFor.toLowerCase()))
  );
}, [products, form.lookFor]);

const handleSubmit = (e) => {
  e.preventDefault()
  const q = query(collection(db, 'Products'), where('name', '==', form.lookFor));
  getDocs(q)
    .then((products) => {
      const productsData = products.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFilteredProducts(productsData);})

}


return (
  <>
    {
      products.length
        ?
        <>
        <main className="banner-container">
            <img className='banner-main' src={banner} alt='banner-main'/>
            <div className='content-overlay'>
              <div className="content-container">
            <h1>SHOP ALL DROPS</h1>
            </div>
            </div>
        </main>
        <div className='container-form'>
        <form onSubmit={handleSubmit} className='form'>
          <input
            placeholder='Search'
            name='lookFor'
            type='text'
            value={form.lookFor}
            onChange={handleInputChange} />
            <img src={search} alt='search' className='logo-buscar'/>
        </form>
      </div>
          <div className='homepage-products'>

            <ul className='container'>
              {filteredProducts.map(product => (
                <li key={product.id} className='product'>
                  <Link to={`/products/${product.id}`} className='product-name'>{product.name}</Link>
                  <img src={product.img} className='img-product' alt={`Imagen de ${product.name}`} />
                </li>
              ))}
            </ul>
          </div>
        </>
        :
        <div className="spinner-container">
        <Spin size="large" />
      </div>
    }
  </>
)
}
