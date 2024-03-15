import axios from "axios";
import { getUserProductError,getUserProductSuccess } from "../Products/actions";
import { response } from "express";
const URL = "http://localhost:6969";

export const GetuserProduct = (metamaskAccount) => async (dispatch) => {
    try {

        const requestData = {
            hell:'here',
            metamaskAccount: metamaskAccount
        };
        const response = await axios.post(`${URL}/getUserProducts`, requestData);
        dispatch(getUserProductSuccess(response.data)); // Dispatch a success action
    } catch (error) {
        console.log(error.message);
        dispatch(getUserProductError(error.message)); // Dispatch an error action
    }
};
