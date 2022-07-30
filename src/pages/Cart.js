import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { CartState } from "../Context/context";
import "../Components/components.css";
import Details from "../Components/Details";
import ProductCard2 from "../Components/ProductCard2";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Box, Button, Modal, Typography } from "@mui/material";
const Cart = () => {
  const {
    state: { cart, favorite },
    dispatch,
  } = CartState();
  const [price, setPrice] = useState(0);
  console.log("in cartPage", cart);
  useEffect(() => {
    setPrice(cart.reduce((acc, val) => acc + Number(val.price), 0));
  }, [cart]);
  console.log(price);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="cart">
      <div className="details">
        <div className="info">
          <h1>Price Details</h1>
          <div className="pricetag">
            <h3> Price</h3>
            <h4>{price}</h4>
          </div>
          <Button className="button" color="primary" onClick={handleOpen} variant="contained" >Place Order</Button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CheckCircleOutlineIcon className="tic"/>
          <Typography id="modal-modal-description" sx={{ mt: 4 ,fontSize:30 ,marginLeft:2}}>
            Order Placed Successfully
          </Typography>
          <p style={{marginLeft:15}}>Your product will be delivered in 5 working days</p>
        </Box>
      </Modal>
      

      <div className="productCard2">
        {cart?.map((c) => (
          <ProductCard2
            name={c.name}
            image={c.image}
            price={c.price}
            rating={c.rating}
            deleteCart={true}
            id = {c.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
