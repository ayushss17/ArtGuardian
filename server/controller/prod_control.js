
import addItem from "../model/addschema.js";

export const getProducts = async (req, res) => {
  try {
    const paintType = req.body.type;
    console.log('Received paintType:', paintType);
    const data = await addItem.find({ type: paintType });
    return res.status(200).json(data);
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return res.status(500).json({ message: error.message });
  }
};
