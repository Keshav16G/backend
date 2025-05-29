const mongoose = require('mongoose');

const ChargerSchema = new mongoose.Schema({
  name: String,
  location: {
    latitude: Number,
    longitude: Number
  },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
  powerOutput: Number,
  connectorType: { type: String, enum: ['Type1', 'Type2', 'CCS', 'CHAdeMO'] },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Charger', ChargerSchema);