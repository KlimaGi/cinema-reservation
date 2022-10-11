const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
})

const exportUser = mongoose.model("typeUsers", userSchema);

module.exports = exportUser;