import { useState } from "react";

export const useCounter = ( valorInicial= 1) =>{

    const [ contador, setContador] = useState(valorInicial)

const aumentarContador = (n)=>{ 
  setContador(contador + n)
  console.log('AGREGUE +1')
}

const disminuirContador = (n)=>{
 setContador(contador - n)
 console.log('RESTE -1')
}

return{
    contador,
    aumentarContador,
    disminuirContador
}
}