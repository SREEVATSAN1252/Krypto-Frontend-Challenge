export const cartReducer = (state,action)=>{
switch (action.type) {
    case "ADD_TO_CART":
        return {...state , cart:[...state.cart,{...action.payload}]};

    case "ADD_TO_FAV":
        return {...state , favorite:[...state.favorite,{...action.payload}]};


    case "REMOVE":
        return {...state , cart: state.cart.filter((c)=> c.id !== action.payload.id)}    
       

    default:
        return state;
}
}