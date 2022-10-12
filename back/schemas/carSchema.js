const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
  model: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  gasolineConsumption: {
    type: Number,
    required: true
  },
  fuelType: {
    type: String,
    required: true
  },
})

const exportCar = mongoose.model('typeCars', carSchema);

module.exports = exportCar;