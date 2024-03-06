import React from 'react'
import { RenderPropsCounter } from './components/RenderPropsCounter'

export const App5 = () => {
  
  return (
    <div>
      <h1>Mi quinta APP con React!</h1>
      <RenderPropsCounter>
        {
          (count, handleIncrement) => (
            <>
              <p>Count: {count}</p>
              <button onClick={handleIncrement}>Incrementar</button>
            </>
          )
        }
      </RenderPropsCounter>

    </div>
  )
}