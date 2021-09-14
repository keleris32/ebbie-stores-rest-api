const WaistApparel = require('../models/WaistApparelModel');

const getWaistApparels = async (req, res) => {
  try {
    // Find all waistApparel in db
    const waistApparels = await WaistApparel.find({}).sort({ _id: 1 });

    // Send the data as response
    res.json(waistApparels);
  } catch (error) {
    console.error(error);

    // respond with a 500 status code.
    res.status(500).json({ message: 'Server Error' });
  }
};

const getWaistApparelById = async (req, res) => {
  try {
    // Find a specific waist apparel by it's ID
    const waistApparel = await WaistApparel.findById(req.params.id);

    // Send the data as response
    res.json(waistApparel);
  } catch (error) {
    console.error(error);

    // respond with a 500 status code
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getWaistApparels,
  getWaistApparelById,
};
