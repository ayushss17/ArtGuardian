import addItem from "../model/addschema.js"

export const getProducts = async (request,response)=>{
    try{
        const data= await addItem.find({})
        return response.status(200).json(data)
    }
    catch(error){
        return response.status(500).json({message:error.message})
    }

}