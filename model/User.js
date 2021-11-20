const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [6, 'Must be at least 6 creates'],
    required: [true, 'Please check your data entry, no name specified!']
  },

  password: {
    type: String,
    minLength: [6, 'Must be at least 6 creates'],
    required: [true, 'Please check your data entry, no password specified!']
  },
  mobile: {
    type: String,
    minLength: [6, 'Must be at least 6 number'],
    required: [true, 'Please check your data entry, no mobile specified!']
  },
  todo: {
    type: []
  },

  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', userSchema)
