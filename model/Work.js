const mongoose = require('mongoose')

const workSchema = new mongoose.Schema({
  address: {
    type: String
  },
  start: {
    type: String
  },
  end: {
    type: String
  },
  checkIn: {
    type: String,
    default: null
  },
  checkOut: {
    type: String,
    default: null
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Work', workSchema)
