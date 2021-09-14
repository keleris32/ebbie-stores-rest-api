const PadApparel = require('../models/PadApparelModel');

const getPadApparels = async (req, res) => {
  try {
    // Find all PadApparel in db
    const padApparels = await PadApparel.find({}).sort({ _id: 1 });

    // Send the data as response
    res.json(padApparels);
  } catch (error) {
    console.error(error);

    // respond with a 500 status code.
    res.status(500).json({ message: 'Server Error' });
  }
};

const getPadApparelById = async (req, res) => {
  try {
    // Find a specific waist apparel by it's ID
    const padApparel = await PadApparel.findById(req.params.id);

    // Send the data as response
    res.json(padApparel);
  } catch (error) {
    console.error(error);

    // respond with a 500 status code
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getPadApparels,
  getPadApparelById,
};
