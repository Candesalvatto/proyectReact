import React from 'react'
import { WithToggle } from './WithToggle'
import './Button.css'





export const Button = ({ cambiarContador,  text, handleToggle }) => {
  return (
    <button className='button-contador'
    onClick={() => {
      cambiarContador();
      handleToggle()}}
    > {text}

    </button>
  )
}


export const ToggleButton = WithToggle( Button )