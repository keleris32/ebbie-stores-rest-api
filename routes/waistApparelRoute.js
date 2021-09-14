const express = require('express');
const router = express.Router();

const {
  getWaistApparels,
  getWaistApparelById,
} = require('../controller/waistApparelController');

//@desc GET all waist apparel products from db
//@route GET /api/apparel/waist-trainers
//@access Public
router.get('/', getWaistApparels);

//@desc GET waist apparel product by id
//@route GET /api/apparel/waist-trainers/:id
//@access Public
router.get('/:id', getWaistApparelById);

module.exports = router;
