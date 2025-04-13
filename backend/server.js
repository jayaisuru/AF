const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://af-countries-backend.vercel.app' ,
  methods: ["GET", "POST"],
  credentials: true,
}));

const authRoutes = require('./routes/auth');


app.use('/api/auth', authRoutes);


module.exports = app;

if (require.main === module) {
  mongoose.connect('mongodb+srv://samarakoonlapjayaisuru:pqAbgm9FvihBI2iE@cluster0.flpfu.mongodb.net/')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB error:', err));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}