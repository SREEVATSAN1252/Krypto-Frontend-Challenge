import axios from "axios";
import React from "react";
import { data } from "./db";
import ProductCard from "./ProductCard";
import "./components.css"
import { CartState } from "../Context/context";
const Home = () => {
 const products = data.products;

console.log(products);
  return <div className="productCard">
{
    products.map((p)=>
       <ProductCard id={p.id} name={p.title} image={p.image} key = {p.id}  price = {p.amount} rating = {p.rating}/>
    )
}

  </div>;
};


export default Home;

