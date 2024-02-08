import { Item } from "@/app/Types/component_types";
const envDomain = {
    localhost:'http://localhost:3000',
    dev_env:'',
    prod_env:''
}

export async function getItemById(id:string):Promise<Item>{
   let response = await fetch(`${envDomain.localhost}/api/products/${id}`)
   return response.json();
}
