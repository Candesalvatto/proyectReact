import React, {useState} from 'react'
import { Clickeable } from './components/Clickeable/Clickeable'

export const App3 = () => {

const [muestraClickeable, setMuestraClickeable] = useState(true)

  return (


    <div style={{ border: '1px solid pink', margin: '20px' }}>
    
    <h1>Mi App 3</h1>

    {muestraClickeable  && <Clickeable onOutClick= {()=>{setMuestraClickeable(false)}} />}
    </div>
  )
}
