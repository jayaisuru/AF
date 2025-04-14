const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://af-countries-backend.vercel.app' }));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// ✅ Always connect to MongoDB (no matter how this file is imported)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// ✅ Export the app for serverless
module.exports = app;

// ✅ Optional: if run directly (for local dev)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}
