import addItem from './model/addschema.js';

const defaultData = async (request,response) => {
    try{
        const items = request.body;
        const newData = new addItem(items);
        await newData.save()
        response.status(200).json({message: items})
        if(items!=null){
            alert("Art Submitted")
        }
    }
    catch(error){
       response.status(500).json({message: error.message})
    }
}

export default defaultData;