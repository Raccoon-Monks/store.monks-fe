
import { getItemById } from "@/app/(ecommerce)/services/ProductManagement/Products";
import { Cart } from "@/app/Types/component_types";
import { NextRequest, NextResponse } from "next/server";

let cart:Cart={};


 let addItemQuantityToCart = async (itemId:string, quantity:number=1) => {
    let isItemInCart = Object.keys(cart).includes(itemId);
    if(isItemInCart){cart[itemId]['quantity'] += quantity; return}
    else{
      const item = await getItemById(itemId);
      cart[itemId] = item;
    }
    return cart
  }

  let removeItemQuantityFromCart = async (itemId:string, quantity:number=1) => {
        cart[itemId]['quantity'] -= quantity; 
        if (cart[itemId]['quantity'] == 0){delete cart[itemId]};
    return cart
  }

  let cleanCart = async () => { cart = {} };


  let CartManager:Record<string,any> = {
    'add': addItemQuantityToCart,
    'remove': removeItemQuantityFromCart,
    'clean': cleanCart
}

export async function POST(request:NextRequest, context: { params: { action: string; }; }) {
    const action = context.params.action;
    const {itemId, quantity} = await request.json();

    CartManager[action](itemId, quantity);

    return NextResponse.json(cart);
}