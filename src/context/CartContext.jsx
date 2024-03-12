import React, { createContext, useState } from 'react'



export const CartContext = createContext({
    cart :[]
})

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])
    const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);

const addProduct = (compra, contador) => {
        if (!inCart(compra.id)) {
          setCart((prev) => [...prev, { ...compra, cantidad: contador }]);
          console.log(`(contexto)Agregado al carrito: ${compra.name} (${compra.id}), cantidad: ${contador}`);
          console.log("(contexto)Estado del carrito actualizado:", cart);

        } else {
          console.error(" (contexto)El producto ya fue agregado");
        }
      };


      const deleteProduct = (productId) => {
        const actualizarCart = cart.filter(prod => prod.id !== productId);
        if (actualizarCart.length === 0) {
            setCart([]);
        } else {
            setCart(actualizarCart);
        }
    }
    

    const limpiarCarrito = () =>{
        setCart ([])
    }



    const cantidadTotal = () => {
        return cart.reduce((acc, prod) => (acc += prod.cantidad), 0)

    }
    
    const cartTotal = () => {
        return cart.reduce((acc, prod) => (acc += prod.price * prod.cantidad), 0);
    }

    const inCart = (productId) =>{
        return cart.some (prod => prod.id === productId)
    }

    return (
        <CartContext.Provider value={{cart, addProduct, deleteProduct, limpiarCarrito, inCart, cantidadTotal, cartTotal, isOrderSuccessful, setIsOrderSuccessful}}>
            {children}
        </CartContext.Provider>
    )
}