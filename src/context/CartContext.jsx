import React, { createContext, useState } from 'react'

export const CartContext = createContext({
    cart :[]
})

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addProduct = (compra, cantidad) =>{
        if (!inCart(compra.id)){
            setCart (prev => [...prev, {...compra, cantidad}])
            console.log(`la cantidad qque agregue es ${cantidad}`)
        } else {
            console.error ('El producto ya fue agregado')
        }
    }

    const deleteProduct = (productId) =>{
        const actualizarCart = cart.filter (prod => prod.id !== productId)
        setCart (actualizarCart)
    }

    const limpiarCarrito = () =>{
        setCart ([])
    }

    const inCart = (productId) =>{
        return cart.some (prod => prod.id === productId)

    }

    const cantidadTotal = () => {
        return cart.reduce((acc, prod) => (acc += prod.cantidad), 0)

    }
    
    const cartTotal = () => {
        return cart.reduce((acc, prod) => (acc += prod.price * prod.cantidad), 0);
    }

    return (
        <CartContext.Provider value={{cart, addProduct, deleteProduct, limpiarCarrito, inCart, cantidadTotal, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}
