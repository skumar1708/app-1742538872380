const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ['running', 'punched', 'collided'],
    default: 'running'
  }
});

module.exports = mongoose.model('Game', GameSchema);