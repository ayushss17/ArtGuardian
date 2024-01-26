import mongoose from "mongoose";


export const  connection = async () =>{
    const URL=`mongodb://ayushsawant2005:123456969@ac-bw9jz40-shard-00-00.piweli4.mongodb.net:27017,ac-bw9jz40-shard-00-01.piweli4.mongodb.net:27017,ac-bw9jz40-shard-00-02.piweli4.mongodb.net:27017/?ssl=true&replicaSet=atlas-k2ozqk-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true,useNewUrlParser: true });
        console.log("DB connected");
    }   
    catch(error){
        console.log(error.message)
    }

}

export default connection;