const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const parkingRoutes = require('./routes/parkingRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/parking', parkingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
