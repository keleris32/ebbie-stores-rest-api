const mongoose = require('mongoose');

// waist apparel schema
const WaistApparelSchema = new mongoose.Schema({
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

// Create model. (Note: 'waist_apparel will be the collection name'. mongoDB would change waist_apparel to waist_apparels)
const WaistApparel = mongoose.model('waist_apparel', WaistApparelSchema);

module.exports = WaistApparel;
