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
    type: String,
    required: true
  },
  gasolineConsumption: {
    type: String,
    required: true
  },
  fuelType: {
    type: String,
    required: true
  },
})

const exportCar = mongoose.model('typeCar', carSchema);

module.exports = exportCar;