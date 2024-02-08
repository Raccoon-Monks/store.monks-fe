"use client"

import React, { createContext, useState } from 'react'
import { type Cart } from "../../../Types/component_types"

const useCartState = () => useState<Cart>({});

export const CartContext = createContext<ReturnType<typeof useCartState> | null>(null)

export function useCart() {
    const cart = React.useContext(CartContext);
    if(!cart) {throw new Error("useCart must be used within a CartProvider ")}

    return cart;
};

const CartProvider = ({children}: {children:React.ReactNode}) => {
    const [cart,setCart] = useCartState();

    return (
        <CartContext.Provider value={[cart,setCart]}>
            {children}
        </CartContext.Provider>
    )
}


const add = async ({id, quantity, setCart}:{id:string, quantity:number, setCart:React.Dispatch<React.SetStateAction<Cart>>}) => {
    let response = await fetch('/api/cart/add/',{method:"POST", body:JSON.stringify({itemId: id, quantity: quantity})});
    let newCart = await response.json()
    setCart(newCart)
    console.log(newCart)
      return newCart
  }

const remove = async ({id, quantity, setCart}:{id:string, quantity:number, setCart:React.Dispatch<React.SetStateAction<Cart>>}) => {
    let response = await fetch('/api/cart/remove/',{method:"POST", body:JSON.stringify({itemId: id, quantity: quantity})});
    let newCart = await response.json()
    setCart(newCart)
    return newCart
  }

const clear = async (id:string, setCart:React.Dispatch<React.SetStateAction<Cart>>) => {
    let response = await fetch('/api/cart/clear/',{method:"POST", body:JSON.stringify({id:id})});
    let newCart = await response.json()
    setCart(newCart)
    return newCart
}

export const CartActions = {add, remove, clear};

export default CartProvider;