import addItem from "./model/addschema.js";

const getSelected = async (req, res) => {
    try {
        const data = req.body;
        console.log(data)
        const response = await addItem.findOne({ artistaddress: data.metamaskAccount });
        console.log(response);
        res.status(200).json(data); // Send the found data as a JSON response
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message }); // Send an error response
    }
};

export default getSelected;
