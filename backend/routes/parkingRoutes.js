const express = require('express');
const { getParkingSlots, createParkingSlot, updateParkingSlot } = require('../controllers/parkingController');
const router = express.Router();

router.get('/', getParkingSlots);
router.post('/', createParkingSlot);
router.put('/:id', updateParkingSlot);

module.exports = router;
