import { act } from "react-dom/test-utils";
import { GET_PROD_SUCCESS } from "../constants/prodConstants";
import { GET_PROD_FAILURE } from "../constants/prodConstants";

import { type } from "@testing-library/user-event/dist/type";



export const getProductsReducer = (state = {products: []},action)=>{

    switch(action.type){
        case GET_PROD_SUCCESS:
            return { products : action.payload}
        case GET_PROD_FAILURE:
            return { error : action.payload}
        default:
            return state;
    }
    
}