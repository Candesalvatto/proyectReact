
import React from 'react'
import { db } from '../../services/db'
import { addDoc, collection } from 'firebase/firestore'
import { useForm } from '../../hooks/useForm'

export const CheckoutForm = () => {



  const [form, handleInputChange] = useForm({
    name: '',
    lastName:'',
    email:'',
    adress:'',
    city:'',
    zipCode:''
  })

  const handleSubmit = (e)=>{
e.preventDefault()

const comprasCollection = collection(db, 'OrdenDeCompra')

const newOrdenCompra = {
    name: form.name,
    lastName:form.lastName,
    email:form.email,
    adress:form.adress,
    city:form.city,
    zipCode:form.zipCode
}

addDoc(comprasCollection, newOrdenCompra)
.then(({id}) => console.log (id))
.catch(error => console.log(error))

  }


  return (
    <div className='container-orden-compras'>
        <form onSubmit={handleSubmit}>
        <label>
            Name
            </label>
            <input 
            type='text'
            name= 'name'
            onChange={handleInputChange}
            required
            />
            <label>
                Last Name
            </label>
            <input 
            type='text'
            name= 'lastName'
            onChange={handleInputChange}
            required
            />

<label>
                Email
            </label>
            <input 
            type='text'
            name= 'email'
            onChange={handleInputChange}
            required
            />

<label>
                Adress
            </label>
            <input 
            type='text'
            name= 'adress'
            onChange={handleInputChange}
            required
            />
            <label>
                City
            </label>
            <input 
            type='text'
            name= 'city'
            onChange={handleInputChange}
            required
            />

<label>
                ZipCode
            </label>
            <input 
            type='number'
            name= 'zipCode'
            onChange={handleInputChange}
            required
            />



        </form>
        
    </div>
  )
}
