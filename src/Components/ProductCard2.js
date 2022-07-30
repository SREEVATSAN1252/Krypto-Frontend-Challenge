import React from 'react'
import { Card } from 'react-bootstrap'
import "./components.css"
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from '@mui/icons-material/Delete';
import { CartState } from '../Context/context';
const ProductCard2 = ({ name, price, image, discription, rating,deleteCart,id}) => {
    const {
        state: { cart, favorite },
        dispatch,
      } = CartState();
    const handleDelete = ()=>{
        dispatch({
          type: "REMOVE",
          payload: { id },
        });
      }
  return (
    <div className="products2">
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Title className="cardTitle">{name}</Card.Title>
      <Card.Text className="cardText">
        {"₹"}
        {price}
      </Card.Text>
      <div className="rating">{rating}</div>
      <div className="fav">
        <div >
          <FavoriteIcon />
        </div>
        {deleteCart?<div>
          <DeleteIcon className="cancel" onClick={handleDelete}/>
        </div>: <div>
          <AddShoppingCartIcon />
        </div>}
       
      </div>
    </Card>
  </div>
  )
}

export default ProductCard2