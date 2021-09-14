const mongoose = require('mongoose');

// pad apparel schema
const PadApparelSchema = new mongoose.Schema({
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

// Create model. (Note: 'pad_apparel will be the collection name'. mongoDB would change pad_apparel to pad_apparels)
const PadApparel = mongoose.model('pad_apparel', PadApparelSchema);

module.exports = PadApparel;
