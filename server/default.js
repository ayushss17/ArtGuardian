import {data} from './constant/data.js'
import Product from './model/products.js';

const defaultData = async () => {
    try{
        await Product.insertMany(data )
        console.log("Data loaded")
    }
    catch(error){
        console.log(error.message)
    }
}

export default defaultData;