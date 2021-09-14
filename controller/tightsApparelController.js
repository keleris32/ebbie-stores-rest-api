const TightsApparel = require('../models/TightsApparelModel');

const getTightsApparels = async (req, res) => {
  try {
    // Find all TightsApparel in db
    const tightsApparels = await TightsApparel.find({}).sort({ _id: 1 });

    // Send the data as response
    res.json(tightsApparels);
  } catch (error) {
    console.error(error);

    // respond with a 500 status code.
    res.status(500).json({ message: 'Server Error' });
  }
};

const getTightsApparelById = async (req, res) => {
  try {
    // Find a specific waist apparel by it's ID
    const tightsApparel = await TightsApparel.findById(req.params.id);

    // Send the data as response
    res.json(tightsApparel);
  } catch (error) {
    console.error(error);

    // respond with a 500 status code
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getTightsApparels,
  getTightsApparelById,
};
