const express = require('express');
const router = express.Router();

const { indexInfo, reserve, carInfo, findCar } = require('../controllers/mainController');

router.get('/indexInfo', indexInfo);

router.get("/reserve/:cell/:movie", reserve);

router.post("/addCar", carInfo);

router.get("/find/:value/:category", findCar);

module.exports = router; 