const ParkingSlot = require('../models/ParkingSlot');

// Get all parking slots
exports.getParkingSlots = async (req, res) => {
    const slots = await ParkingSlot.find();
    res.json(slots);
};

// Create parking slot
exports.createParkingSlot = async (req, res) => {
    const { slotNumber } = req.body;
    const newSlot = new ParkingSlot({ slotNumber });
    await newSlot.save();
    res.json(newSlot);
};

// Update parking slot status
exports.updateParkingSlot = async (req, res) => {
    const { id } = req.params;
    const { isOccupied, vehicleNumber } = req.body;
    const updatedSlot = await ParkingSlot.findByIdAndUpdate(
        id,
        { isOccupied, vehicleNumber },
        { new: true }
    );
    res.json(updatedSlot);
};
