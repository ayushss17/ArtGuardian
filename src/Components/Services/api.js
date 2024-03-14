import axios from "axios";

const URL = "http://localhost:6969"
export const autheticate = async (data) =>{
    try{
        
       return await axios.post(`${URL}/insert`,data) 
           
    }catch(error){
        console.log(error.message)
    }
}