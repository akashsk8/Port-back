const mongoose = require('mongoose');
const CPPCodesSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Code: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CPPCodes', CPPCodesSchema);