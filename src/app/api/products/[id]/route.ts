import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest, context: { params: { id: string; }; }) {
    const itemId = context.params.id;
    const item = {
          id:String(itemId),
          name: `Product ${itemId}`,
          price: Math.ceil(Math.random()*50),
          imgUrl:`testUrl_${itemId}`,
          quantity:1
        }

    return NextResponse.json(item);
}

