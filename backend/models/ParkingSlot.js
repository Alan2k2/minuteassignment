const mongoose = require('mongoose');

const parkingSlotSchema = new mongoose.Schema({
    slotNumber: { type: String, required: true },
    isOccupied: { type: Boolean, default: false },
    vehicleNumber: { type: String, default: '' },
});

module.exports = mongoose.model('ParkingSlot', parkingSlotSchema);
