const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ParkingSlot = require('./models/ParkingSlot');

// Load environment variables
dotenv.config();

// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

// Sample parking slots
const parkingSlots = [
    { slotNumber: 'A1', isOccupied: false },
    { slotNumber: 'A2', isOccupied: false },
    { slotNumber: 'A3', isOccupied: false },
    { slotNumber: 'B1', isOccupied: true, vehicleNumber: 'XYZ123' },
    { slotNumber: 'B2', isOccupied: false },
];

// Insert data
const seedData = async () => {
    try {
        await ParkingSlot.deleteMany(); // Clear existing data
        await ParkingSlot.insertMany(parkingSlots); // Insert sample data
        console.log('Data successfully seeded!');
        process.exit();
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

// Run the seed process
connectDB().then(seedData);
