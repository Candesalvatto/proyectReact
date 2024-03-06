// import React, { useEffect, useRef } from 'react'
// import './Clickeable.css'


// export const Clickeable = ({onOutClick}) => {

// const cajaRef = useRef()

// useEffect(()=>{

//   const handleClick = (e)=>{
//     if (cajaRef.current && cajaRef.current.contains(e.target)){
//       console.log('Bien hecho!')
//     }
//     else{
//       console.log('Fallaste')
//       onOutClick()
//     }
//   }

//   document.addEventListener('click', handleClick)
//   return()=>{  document.removeEventListener('click', handleClick)}
// }, [onOutClick])

//   return (
//     <div className='clickeable-container' ref={cajaRef} >

//         <p>Haz click dentro de la caja</p>
//     </div>
//   )
// }
