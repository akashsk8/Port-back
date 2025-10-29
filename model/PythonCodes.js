const mongoose = require('mongoose');
const PythonCodesSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Code: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PythonCodes', PythonCodesSchema);