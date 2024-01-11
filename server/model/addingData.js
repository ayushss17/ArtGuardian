


const insertData = (request,response) => {
    try{
        console.log(request.body)
    }catch(error){
        console.log(error.message)
    }
}

export default insertData;