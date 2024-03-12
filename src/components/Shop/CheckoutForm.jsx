
import React, { useState, useContext } from 'react'
import './Shop.css'
import {db} from '../../services/db'
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'
import { CartProvider, CartContext } from '../../context/CartContext';



export const CheckoutForm = () => {
  const navegate = useNavigate()
  const { setIsOrderSuccessful } = useContext(CartContext);

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [adress, setAdress] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')





  const handleConfirm = (e)=>{
    e.preventDefault();
    if (!name || !lastName || !email || !adress || !city || !zipCode) {
      console.error("Error: Todos los campos son obligatorios.");
      return;
    }
    const userData = {
      name, lastName, email, adress, city, zipCode
    }

    addDoc(collection(db, 'OrdenDeCompra'), userData)
    .then(docRef => {
      console.log("Orden de compras cargada: ", docRef.id);
      setName('');
      setLastName('');
      setEmail('');
      setAdress('');
      setCity('');
      setZipCode('');

      setIsOrderSuccessful(true);
      navegate(`/shop/checkout/${docRef.id}`)
    })
    .catch(error => {
      console.error("Error al cargar la orden: ", error);
    });
};


  return (
    <CartProvider>
    <div className='container-orden-compras'>
      <h1>PURCHASE ORDER</h1>
        <form onSubmit={handleConfirm}>
        <label>
            Name
            </label>
            <input 
            type='text'
            name= 'name'
            value={name} 
            onChange={({target}) => setName(target.value)}
            required
            />
            <label>
                Last Name
            </label>
            <input 
            type='text'
            name= 'lastName'
            value={lastName} 
            onChange={({target}) => setLastName(target.value)}
            required
            />

<label>
                Email
            </label>
            <input 
            type='email'
            name= 'email'
            value={email} 
            onChange={({target}) => setEmail(target.value)}
            required
            />

<label>
                Adress
            </label>
            <input 
            type='text'
            name= 'adress'
            value={adress} 
            onChange={({target}) => setAdress(target.value)}
            required
            />
            <label>
                City
            </label>
            <input 
            type='text'
            name= 'city'
            value={city} 
            onChange={({target}) => setCity(target.value)}
            required
            />

<label>
                ZipCode
            </label>
            <input 
            type='number'
            name= 'zipCode'
            value={zipCode} 
            onChange={({target}) => setZipCode(target.value)}
            required
            />
<div className='container-form-boton'>
                <button type="submit" className="form-boton">Creat Order</button>
            </div>
        </form>
        
    </div>
    </CartProvider>
  )
}
