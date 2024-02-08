'use client'

import { useState } from "react";
import CarouselArrow from "../Buttons/CarouselArrow";
import ShelfCard from "../ShelfCard/ShelfCard";
import { CarouselProps } from "@/app/Types/component_types";
import Container from "../Containers/DivContainer";

export default function CarouselShelf ({contents, id}:CarouselProps) {

let itemsLength = contents.length;
let [visibleItems, setVisibleItems] = useState([0,1,2,3])

let arrowClickHandlers = {
  left: () => setVisibleItems(visibleItems.map(item => (item+itemsLength-1)%itemsLength)),
  right: () => setVisibleItems(visibleItems.map(item => (item+itemsLength+1)%itemsLength))
}


return (
  <Container id={id} style={'carousel-shelf-globals'} >
    <CarouselArrow orientation={"Left"} onClick={arrowClickHandlers.left}/>
      {visibleItems.map((item,index) => {
        return (
            <ShelfCard 
              id={`carousel-card${index}`} 
              style={'shelf-card-globals'} 
              key={index} 
              content={contents[item]['content']} 
              href={contents[item].href}/> 
            )
        } 
      )}
    <CarouselArrow orientation={"Right"} onClick={arrowClickHandlers.right}/>
  </Container>
)
        
}