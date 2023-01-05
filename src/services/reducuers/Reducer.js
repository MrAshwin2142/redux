import { ADD_TO_CART } from "../Constrant";

const initialState ={
    cartData:[]
}
export default function cardItem(state=[],action){
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("reducers",action)
            return[
                ...state,
                {cartData : action.data}
            ]
        default:
            return state
    }
}