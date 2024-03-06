import React, {useRef} from 'react'
import './App.css'
import { useForm } from './hooks/useForm'



export const App2 = () => {

const inputRef = useRef()

const [handleInputChange, form] = useForm({
    nombre:'', 
    apellido:''
})



const InputClassName = (name) => {
    return form[name].length < 5 ? "input-red" : "input-green"
  }


  const inputRender =((name, type)=>(
    <input
    name={name} 
    type={type} 
    ref={inputRef} 
    placeholder= {`ingrese ${name}`}
     value={form[name]} 
    onChange={(e)=>{handleInputChange(e)}} 
     className= {InputClassName(name)}
    />
  ))

  return (
    <div style={{ border: '1px solid purple', margin: '20px' }}>
        <h3>Mi segunda app</h3>
        <form className='user-form'>
            {inputRender('nombre', 'text')}
            {inputRender('apellido', 'text')}

        <button type='submit'>
        CLICK       
        </button>
        </form>
    </div>
  )
}
