import { type } from "@testing-library/user-event/dist/type";
import axios from "axios"
import { GET_PROD_SUCCESS } from "../constants/prodConstants";
import { GET_PROD_FAILURE } from "../constants/prodConstants";
const URL = "http://localhost:6969"
export const getProducts = ()=> async (dispatch)=>{
    try{
        const response= await axios.get(`${URL}/products`);
        console.log(response)
        dispatch({type:GET_PROD_SUCCESS,payload:response.data})
    }
    catch(error){
        dispatch({type:GET_PROD_FAILURE,payload:error.message})
    }
}