import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Products.css'
import { collection, getDocs, query, where } from 'firebase/firestore'
import banner from '../../assets/imgs/DROP001.jpg'
import { Spin } from 'antd';
import { useForm } from '../../hooks/useForm'
import search from '../../assets/imgs/buscar.png'
import { db } from '../../services/db'

export const Products = () => {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  

  const { form, handleInputChange } = useForm({ lookFor: '' })



  useEffect(() => {
    const productsDB = collection(db, 'Products');
    getDocs(productsDB)
      .then((products) => {
        const allProducts = products.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(allProducts);
        setFilteredProducts(allProducts.filter((product) => product.drop === 1));
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => product.drop === 1 && product.name.toLowerCase().includes(form.lookFor.toLowerCase()))
    );
  }, [products, form.lookFor]);



  const handleSubmit = (e) => {
    e.preventDefault();
    const q = query(collection(db, 'Products'), where('name', '==', form.lookFor));
    getDocs(q)
      .then((result) => {
        const foundProducts = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setFilteredProducts(foundProducts.filter((product) => product.drop === 1));
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  return (
    <>
      <main className="banner-container">
        <img className='banner-main' src={banner} alt='banner-main' />
        <div className='content-overlay'>
          <div className="content-container">
            <h1>DROP 001</h1>
            <h2>FAUX LEATHER + BASE LAYERS</h2>
            <p>NAMILIA: BERLIN BASED, KNOWN FOR THEIR RAVE REVIVAL AND MOTORCROSS STYLE. ROOTED IN REWORKING COMMON CONCEPTS OF FEMININITY AND MASCULINITY</p>
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
      {filteredProducts.length === 0 && (
        <div className="spinner-container">
          <Spin size="large" />
        </div>
      )}
    </>
  )
}
