const express = require('express');
const router = express.Router();

const {
  getPadApparels,
  getPadApparelById,
} = require('../controller/padApparelController');

//@desc GET all pad apparel products from db
//@route GET /api/apparel/arm-shapers
//@access Public
router.get('/', getPadApparels);

//@desc GET pad apparel product by id
//@route GET /api/apparel/arm-shapers/:id
//@access Public
router.get('/:id', getPadApparelById);

module.exports = router;
