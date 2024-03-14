
import axios from "axios";

const URL = "http://localhost:6969"
export const buyprocess = async (buypaint,metamaskAccount) =>{
    try{
        const requestData = {
            ...buypaint,
            metamaskAccount: metamaskAccount
        };
        console.log(requestData)
       return await axios.post(`${URL}/buy`,requestData)
    }catch(error){
        console.log(error.message)
    }
}