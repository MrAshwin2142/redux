import { ADD_TO_CART } from "../Constrant";

const initialState ={
    cartData:[]
}
export default function cardItem(initialState,action){
    switch (action.type) {
        case ADD_TO_CART:
            return{
                ...initialState,
                cartData : action.data
            }
            break;
    
        default:
            return initialState
    }
}