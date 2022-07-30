
import React from 'react'
import { Badge} from 'react-bootstrap'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./components.css"
import { Link } from 'react-router-dom';
import { CartState } from '../Context/context';

const Header = () => {
  const {
    state: { cart ,favorite},
    dispatch,
  } = CartState();
  console.log("header",cart);
  return (
   <div className='header'> 
   <Link to={"/"}>
   <h2 className='h2'>ShopKart.</h2>
   </Link>
    
    <div className='sideHeader'>
      <Link to={"/product"}><h3>Products</h3></Link>
        
        <h3>Login</h3>
        <div className='cartIcon'><Link to="/cart"><ShoppingCartIcon />
            <Badge>{cart.length}</Badge></Link></div>
        
            
        

    </div>
   </div>
  )
}

export default Header