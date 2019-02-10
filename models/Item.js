const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let itemSchema = new Schema({
  description: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Item', itemSchema);