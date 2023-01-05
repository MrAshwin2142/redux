import { ADD_TO_CART } from "../Constrant";
export const AddToCart = (data) => {
  return{
    type : ADD_TO_CART,
    data : data
  };
}
