const express = require('express');

// express serveris
const app = express();
const cors = require('cors');
const mongoose = require("mongoose")
const mainRouter = require("./routes/router");

mongoose.connect("mongodb+srv://admin:admin@cluster0.ygdrbad.mongodb.net/?retryWrites=true&w=majority")
  .then(() => { console.log('connected ok') })
  .catch(e => {
    console.log('connection error')
  })

app.use(cors());
// is front'o galiu siusti objektus, back'as lengvai juos skaityti gales
app.use(express.json());

app.listen(4000);

app.use('/', mainRouter);

const userSchema = require('./schemas/userSchema');
const carSchema = require('./schemas/carSchema');

async function addUser() {
  const newUser = new userSchema({
    username: "titas",
    age: 30,
    photo: 'httpdsfdsf'
  })

  const user = await newUser.save();
  console.log('user', user);
};

// async function addCar() {
//   const newCar = new carSchema({
//     model: "titas",
//     color: '30',
//     year: 'httpdsfdsf',
//     gasolineConsumption: 'sdfcds',
//     fuelType: 'electric'
//   })

//   const car = await newCar.save();
//   console.log('car', car);
// }
addUser();
// addCar();
