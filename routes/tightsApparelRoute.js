const express = require('express');
const router = express.Router();

const {
  getTightsApparels,
  getTightsApparelById,
} = require('../controller/tightsApparelController');

//@desc GET all tights apparel products from db
//@route GET /api/apparel/butt-lifters
//@access Public
router.get('/', getTightsApparels);

//@desc GET tights apparel product by id
//@route GET /api/apparel/butt-lifters/:id
//@access Public
router.get('/:id', getTightsApparelById);

module.exports = router;
