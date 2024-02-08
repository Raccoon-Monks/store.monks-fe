import { ReactNode } from "react";
import * as EventHandlers from '../(ecommerce)/services/EventHandlers'


export type PageProps = {
  id:string,
  style:string,
  children: React.ReactNode
}

export type Category = {
  name: string,
  id: string
}

export type ProductDetailsProps = {
  id: string,
  item: Item
}
export type ShelfCard = {
  id:string,
  style: string,
  href: string,
  content: Item | Category
}

export type CarouselProps = {
  contents: ShelfCard[],
  id: string,
}

export type ContainerProps = {
  children: React.ReactNode,
  style: string,
  id:string
}

export type CtaButtonProps = {
  href?:string,
  children?:ReactNode|string,
  id:string,
  buttonstyle:string,
  handlerName: keyof typeof EventHandlers,
}

export type AddToCartButton = {
  href?:string,
  children?:ReactNode|string,
  id:string,
  buttonstyle:string
  item: Item
}

export type Item = {
  id: string,
  name: string,
  price?: number,
  imgUrl?: string,
  quantity: number,
}

export type Cart =  Record<string,Item>

export type ListingProps = {
  contents: ShelfCard[],
  listName: string,
  id: string
}
