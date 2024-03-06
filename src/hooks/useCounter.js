import { useState } from "react";

export const useCounter = ( valorInicial= 1) =>{



    const [ contador, setContador] = useState(valorInicial)

const aumentarContador = (n)=>{ 
  setContador(contador + n)
}

const disminuirContador = (n)=>{
 setContador(contador - n)
}

return{

    contador,
    aumentarContador,
    disminuirContador
}
}