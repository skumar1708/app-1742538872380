const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const gameRoutes = require('./routes/gameRoutes');
dotenv.config();

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/api/game', gameRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));