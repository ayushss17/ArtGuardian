import axios from "axios"
import { GET_PROD_SUCCESS,GET_USER_PRODUCTS_SUCCESS } from "../constants/prodConstants";
import { GET_PROD_FAILURE,GET_USER_PRODUCTS_FAILURE } from "../constants/prodConstants";
const URL = "http://localhost:6969"
export const getUserProducts = (metamaskAccount) => async (dispatch) => {
  if (!metamaskAccount) {
    console.error('Metamask account is not defined.');
    return;
  }

  try {
    const requestData = {
      hello: 'Hello',
      metamaskAccount: metamaskAccount
    };

    const response = await axios.post(`${URL}/getUserProd`, requestData);
    console.log(response.data.message);
    dispatch({type:GET_USER_PRODUCTS_SUCCESS,payload:response.data.message})

  } catch (error) {
    dispatch({type:GET_USER_PRODUCTS_FAILURE,payload:error.message})

  }
};
    
