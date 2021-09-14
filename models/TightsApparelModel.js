const mongoose = require('mongoose');

// tights apparel schema
const TightsApparelSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
  },
});

// Create model. (Note: 'tights_apparel will be the collection name'. mongoDB would change tights_apparel to tights_apparels)
const TightsApparel = mongoose.model('tights_apparel', TightsApparelSchema);

module.exports = TightsApparel;
