import React from 'react'
import { CartState } from '../Context/context'
import ProductCard from './ProductCard';

const FavProduct = () => {
    const {state:{favorite}} = CartState()
    console.log("====>",favorite);
  return (
    <div>
        {favorite?.map((f)=><ProductCard name={f.name} image={f.image} discription={f.discription} price={f.price} rating={f.rating} />)}
    </div>
  )
}

export default FavProduct