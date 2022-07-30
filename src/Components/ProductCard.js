import React from "react";
import { Card } from "react-bootstrap";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./components.css";
import { CartState } from "../Context/context";
import { data } from "./db";
import DeleteIcon from '@mui/icons-material/Delete';
const ProductCard = ({ name, price, image, discription, rating,deleteCart ,id}) => {
  const {
    state: { cart, favorite },
    dispatch,
  } = CartState();
  console.log("iam cart,", cart);
  const clickHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { name, price, image, discription, rating,id },
    });
  };
  const handleDelete = ()=>{
    dispatch({
      type: "REMOVE",
      payload: { id },
    });
  }

  const favHandler = () => {
    dispatch({
      type: "ADD_TO_FAV",
      payload: { name, price, image, discription, rating,id },
    });
  };
  console.log("iam,FAV", favorite);
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Title className="cardTitle">{name}</Card.Title>
        <Card.Subtitle>{discription}</Card.Subtitle>
        
        <Card.Text className="cardText">
          {"₹"}
          {price}
        </Card.Text>
        <div className="rating">{rating}</div>
        <div className="fav">
          <div onClick={favHandler}>
            <FavoriteIcon />
          </div>
          {deleteCart?<div onClick={handleDelete}>
            <DeleteIcon className="cancel" />
          </div>: <div onClick={clickHandler}>
            <AddShoppingCartIcon />
          </div>}
         
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
