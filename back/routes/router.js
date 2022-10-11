const express = require('express');
const router = express.Router();

const { indexInfo, reserve, carInfo } = require('../controllers/mainController');

router.get('/indexInfo', indexInfo);

router.get("/reserve/:cell/:movie", reserve);

router.post("/carData", carInfo)

module.exports = router; 