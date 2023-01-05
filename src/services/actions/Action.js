import { ADD_TO_CART } from "../Constrant";
export const AddToCart = (data) => {
  console.warn("action",data)
    return{
    type : ADD_TO_CART,
    data : data
  };
}
