//  import React from 'react';
// import { ToggleButton} from "./components/Button";
// import ItemListContainer from "./components/ItemListContainer";
// import { Contenedor } from "./components/Contenedor";
// import { TitleContador } from "./components/TitleContador";
// import { useCounter } from "./hooks/useCounter";


// export function App({valorInicial}) {

//  const{contador, aumentarContador, disminuirContador, reestablecerContador} = useCounter(valorInicial)


//   return (







// {/* (comonente padre) */}
// <TitleContador contador={contador}/> 
//     <h1> Contador</h1>
//     {/* (componente hijo) */}
//     <ToggleButton cambiarContador={ ()=>
//     aumentarContador(1)}
//     text ={'+1'} 
//     />
//         <ToggleButton cambiarContador={ ()=>
//     reestablecerContador()}
//     text ={'Reestablecer'} 
//     />
//         <ToggleButton cambiarContador={ ()=>
//     disminuirContador(1)}
//     text ={'-1'} 
//     />

// </Contenedor>
//   );
// }

// export default App

import React from 'react'
import banner from './assets/imgs/bannerkhy.jpg'
import khy1 from './assets/imgs/ky1 (1).jpg'
import khy2 from './assets/imgs/ky2.jpg'
import khy3 from './assets/imgs/ky3.jpg'
import khy4 from './assets/imgs/ky4.jpg'
import './index.css';
import about from './assets/imgs/aboutkylei.jpg'

export const App = () => {
  return (

    <div className='homepage'>
    
    <img className='banner-img' src={banner} alt="khy" />
    <section className='looks'>
      <h1>LOOKS</h1>
      <div className='container-img'>
        <img src={khy1} alt="img" />
        <img src={khy2} alt="img" />
        <img src={khy3} alt="img" />
        <img src={khy4} alt="img" />
      </div>
    </section>
    <section className='about'>
      <img className='about-khy' src={about} alt='about-khy'/>
      <h2>ABOUT KHY</h2>
      <h3>KHY AIMS TO REDEFINE THE MODERN WARDROBE BY OFFERING EDITED COLLECTIONS THAT SEAMLESSLY BLEND LUXURY WITH EVERYDAY STYLE, SPANNING A DIVERSE RANGE OF CATEGORIES AND STYLES. BY COLLABORATING WITH ICONIC BRANDS AND GLOBAL DESIGNERS, WE HOPE THAT KHY WILL BE A PLATFORM THAT DELIVERS ACCESS TO INCREDIBLE FASHION FOR EVERYONE.</h3>
    </section>
    </div>



  )
}
